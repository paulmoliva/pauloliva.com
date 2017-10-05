import React from 'react';
import ReactDOM from 'react-dom';
const google = window.google;
import asdData from './asdData';
import schoolLocations from './asd_lat_lng';
import individualScores from './individual_scores';

// we need to provide a center coordinate for our map, this is ANC
const mapCenter = { lat: 61.2181, lng: -149.8003 };

// just a normal react component class :)
class Map extends React.Component {

  constructor(props) {
    super(props);
    this.addSchool = this.addSchool.bind(this);
    this.state = {
      activeSchool: '',
      openWindow: null,
      searchResults: []
    };
  }

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
      zoom: 10
    };

    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    // we are going to add a map marker for each burrito place now
    this.props.allSchools.forEach(this.addSchool);
  }

  addSchool(theSchool) {
    /*
     * we make an instance of the google maps LatLng class, args are
     * (lat, lng)
     */
    const pos = new google.maps.LatLng(
      schoolLocations[theSchool.school_name].lat,
      schoolLocations[theSchool.school_name].lng
    );

    const averageScore = (
      (
        parseInt(individualScores[theSchool.school_name]["Math"]) +
        parseInt(individualScores[theSchool.school_name]["ELA"])
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
          <p>Name:${theSchool.school_name}</p>
          <p>
            % Below Proficiency in ELA:
            ${individualScores[theSchool.school_name]["ELA"]}
          </p>
          <p>
            % Below Proficiency in Math:
            ${individualScores[theSchool.school_name]["Math"]}
          </p>
        </div>`,
      maxWidth: 200
    });

    // when the marker is clicked on, alert the name
    marker.addListener('click', () => {
      if(this.state.openWindow) {
        this.state.openWindow.close();
      }
      this.state.openWindow = infowindow;
      infowindow.open(this.map, marker);
      this.setState({
        activeSchool: theSchool.school_name
      });
    });
  }

  displaySchoolStats() {

    const generateStatsText = el => {
      if (el.grade === 'All Grades') {
        return (
          <li><p><strong>All Grades {el.subject}:</strong></p> {(Number(el.perecent_below) * 100).toFixed(0)}% below proficient</li>
        );
      } else {
        return (
          <li><p><strong>Grade {el.grade} {el.subject}:</strong></p> {(Number(el.perecent_below) * 100).toFixed(0)}% below proficient</li>
        );
      }
    };

    const schoolStats = asdData.filter( el => el.school_name === this.state.activeSchool);
    const statsListArray = [];
    schoolStats.forEach( el => {
      statsListArray.push(generateStatsText(el));
    });
    return (
      <div className="school-display">
          <h2>{this.state.activeSchool}</h2>
          <ul>
            {statsListArray}
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
        searchResults: Object.keys(individualScores).filter( schoolName => schoolName.toLowerCase().includes(searchTerm.toLowerCase()) )
      });
    }
  }



  renderSearchResults() {
    return this.state.searchResults.map( (el, i) => {
      return (
        <li
          key={i}
          style={{
            fontSize: '18px',
            padding: '7px 4px'
          }}
        >
          <a
            href="#"
            onClick={ e => {
              e.preventDefault();
              this.setState({
                activeSchool: el,
                searchResults: []
              });
              document.getElementById('search-bar').value = '';
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
      </div>
    );
  }
}

ReactDOM.render(
  <Map center={mapCenter} allSchools={asdData}/>,
  document.getElementById('root')
);
