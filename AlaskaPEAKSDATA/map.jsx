import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const google = window.google;
import schoolLocations from './asd_lat_lng';
import {individualScores} from './indiv_scores_2018';
import allSchoolNames from './allSchoolNames';

// we need to provide a center coordinate for our map, this is ANC
const mapCenter = { lat: 61.5847536, lng: -149.432754 };

// just a normal react component class :)
class Map extends React.Component {

  constructor(props) {
    super(props);
    this.addSchool = this.addSchool.bind(this);
    this.state = {
      activeSchool: '',
      loadedSchool: null,
      openWindow: null,
      searchResults: [],
      statsListArray: []
    };
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return (this.state.loadedSchool === null) || (nextState.loadedSchool !== this.state.loadedSchool);
  // }

  componentDidMount() {
    /*
     * ReactDOM.findDOMNode gets us a pointer to the actual html DOM
     * element, not its React component class instance, this is what
     * Google maps wants to render the map into this.refs is an object
     * populated by giving children a 'ref' prop when we render
     */
    const map = ReactDOM.findDOMNode(this.refs.map);

    /*
     * we make these options so when the map loads up it displays a
     * good location and zoom level, zoom of 13 show most of SF
     */
    const options = {
      center: this.props.center,
      zoom:5
    };

    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    // we are going to add a map marker for each burrito place now
    allSchoolNames.forEach(this.addSchool);
  }

  addSchool(theSchool) {
    /*
     * we make an instance of the google maps LatLng class, args are
     * (lat, lng)
     */

    if (!schoolLocations[theSchool]) {
      return '';
    }
    const pos = new google.maps.LatLng(
      schoolLocations[theSchool].lat,
      schoolLocations[theSchool].lng
    );

    const averageScore = (
      (
        parseInt(individualScores[theSchool]["Math"]) +
        parseInt(individualScores[theSchool]["ELA"])
      )
      / 2 );

      const determineFillColor = score => {
        if (score < 31) {
          return 'green';
        } else if (score < 51) {
          return 'yellow';
        } else {
          return 'red';
        }
      };

    const goldStar = {
      path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
      fillColor: determineFillColor(averageScore),
      fillOpacity: 0.8,
      scale: 0.05,
      strokeColor: determineFillColor(averageScore),
      strokeWeight: 1
  };

    /*
     * then we use our new instance of LatLng to make a marker
     * set map to this.map, this is what adds it to the map
     * when we want to remove this marker, we need to set its
     * map property to null using myMarker.setMap(null)
     */
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: goldStar,
      strokeColor: 'red'
    });

    const infowindow = new google.maps.InfoWindow({
      content: `
        <div id="${theSchool.school_id}">
          <p>Name:${theSchool}</p>
          <p>
            % Below Proficiency in ELA:
            ${individualScores[theSchool]["ELA"]}
          </p>
          <p>
            % Below Proficiency in Math:
            ${individualScores[theSchool]["Math"]}
          </p>
        </div>`,
      maxWidth: 200
    });

    // when the marker is clicked on, alert the name
    marker.addListener('click', () => {
      if(this.state.openWindow) {
        this.state.openWindow.close();
      }
      this.setState({openWindow:infowindow});
      infowindow.open(this.map, marker);
      this.setState({
        activeSchool: theSchool
      });
      this.fetchScores().bind(this);
      const center = new google.maps.LatLng(
        marker.position.lat(),
        marker.position.lng()
      );
      this.map.panTo(center);
    });
    window[theSchool] = marker;
  }

  processSubject(subject){
    if (subject === 'ELA') {
      return 'English - Language Arts';
    } else {
      return subject;
    }
  }

  processNumericalScore(scoreString){
    if(scoreString === '0' || scoreString === '*') {
      return 'N/A';
    }
    if (scoreString.indexOf('or more') > -1 || scoreString.indexOf('or fewer') > -1) {
      return scoreString + ' percent below proficient';
    }

    const returnString = scoreString + ' below proficient';
    return returnString;
  }

  fetchScores(){
    const generateStatsText = el => {
      if (el.grade === 'All Grades') {
        return (
          <li
            key={`${el.school_name}-${el.grade}`}
            style={{
            'border': '1px solid white',
            'paddingBottom': '22px',
            'marginTop': '20px',
            'textAlign': 'center'
          }}>
            <p><strong>All Grades {this.processSubject(el.Subject)}:</strong></p> {this.processNumericalScore(el.NotProficientPercent)}
          </li>
        );
      } else {
        return (
          <li>
            <p>Grade {el.grade} {this.processSubject(el.Subject)}:</p> {this.processNumericalScore(el.NotProficientPercent)}
          </li>
        );
      }
    };
    if(this.state.activeSchool !== '' && this.state.activeSchool !== this.state.loadedSchool) {
      this.setState({
        loading: true,
      });
      axios.get(`http://payroll.alaskapolicyforum.org/peaks/${this.state.activeSchool}`)
      .then(schoolStats => {
        const statsListArray = [];
        schoolStats.data.forEach(el => {
          statsListArray.push(generateStatsText(el));
        });
        this.setState({
          statsListArray,
          loading: false,
          loadedSchool: this.state.activeSchool,
        });
      });
    }
  }

  displaySchoolStats() {


    if ((this.state.activeSchool === '')) {
      return (
        <div className="school-display">
          <h1>2018 Alaska Statewide Peaks Data</h1>
          <p>
            Welcome to the Alaska Policy Forum Interactive PEAKS Data Map
          </p>
          <p>
            Click a star on the map to view test scores for that school.
          </p>
          <p>
            Click the + or - on the map to zoom in and out.
          </p>
          <p>
            Alternatively, type a school name into the search bar and click the corresponding search result.
          </p>
        </div>
      );
    }
    return (
      <div className="school-display">
        <h1>2018 Alaska Statewide Peaks Data</h1>
        <h2>{this.state.activeSchool}</h2>
        <ul>
          {this.state.loading ? <li>Loading data for {this.state.activeSchool}</li> : this.state.statsListArray}
        </ul>
      </div>
    );
  }


  searchSchools(e) {
    const searchTerm = e.target.value;
    if(searchTerm === ''){
      this.setState({
        searchResults: []
      });
    } else {
      this.setState({
        searchResults: Object.keys(individualScores)
        .filter(sc => sc.District_Name !== 'Anchorage School District')
        .filter( schoolName => schoolName.toLowerCase().includes(searchTerm.toLowerCase()) )
      });
    }
  }



  renderSearchResults() {
    return this.state.searchResults.map( (el, i) => {
      return (
        <li
          className="search-result-li"
          key={i}
          style={{
            fontSize: '24px',
            padding: '7px 4px'
          }}
        >
          <a
            href="#"
            className="white-link"
            onClick={ e => {
              e.preventDefault();
              this.setState({
                // activeSchool: el,
                searchResults: []
              });
              google.maps.event.trigger(window[el], 'click');
              document.getElementById('search-bar').value = '';
              console.log('click!');
            }}
          >
            {el}
          </a>
        </li>
      );
    });
  }

  render() {
    /*
     * the div that will become the map is just an empty div
     * we give it a 'ref' so we can easily get a pointer to the
     * actual dom node up in componentDidMount
     * DO NOT FORGET: you must style your map div and give it width + height
     * or else it won't be visible!
     */

    return (
      <div className="container">
        <input
          id="search-bar"
          type="text"
          onKeyUp={this.searchSchools.bind(this)}
          placeholder="Search"
        />
      <a href="http://alaskapolicyforum.org/" target="_blank">
          <img
            src="akpf_logo.png"
            className="logo"
          />
        </a>
        <ul className="search-results" style={{position: 'absolute'}}>
          {this.renderSearchResults.bind(this)()}
        </ul>
        <div className="flex-row">
          <div>
            <div id='map' ref='map'/>
          </div>
          {this.displaySchoolStats.bind(this)()}
        </div>
        <div className="stats-key">
          <div className="stats-row">
            <div className="key-box" style={{"backgroundColor": "green"}} />
            <p className="key-text">0-30% below proficiency</p>
          </div>
          <div className="stats-row">
            <div className="key-box" style={{"backgroundColor": "yellow"}} />
            <p className="key-text">31-50% below proficiency</p>
          </div>
          <div className="stats-row">
            <div className="key-box" style={{"backgroundColor": "red"}} />
            <p className="key-text">51-100% below proficiency</p>
          </div>
        </div>
        <p className="na-text">
          N/A: Did not test or too few students to report.
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Map center={mapCenter}/>,
  document.getElementById('root')
);
