import React from 'react';
import ReactDOM from 'react-dom';

// we need to provide a center coordinate for our map, this is SF
const mapCenter = { lat: 61.2181, lng: -149.8003 };

// I made some lat/lng points for some good burrito spots
const burritos = [
  { lat: 61.1439499, lng: -149.8353352, name: "Abbot Loop Elementary", score: 100 },
  { lat: 61.2070325, lng: -149.8321093, name: "Airport Heights Elementary", score: 50 },
  { lat: 61.3012132, lng: -149.5267069, name: "Alpenglow Elementary", score: 75 }
];

// just a normal react component class :)
class Map extends React.Component {

  constructor(props) {
    super(props);
    this.addBurritoPlace = this.addBurritoPlace.bind(this);
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

    // add a movement listener
    this.listenForMove();

    // we are going to add a map marker for each burrito place now
    this.props.burritoPlaces.forEach(this.addBurritoPlace);
  }

  addBurritoPlace(burritoPlace) {
    /*
     * we make an instance of the google maps LatLng class, args are
     * (lat, lng)
     */
    const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);

    const goldStar = {
      path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
      fillColor: burritoPlace.score > 50 ? 'green' : 'red',
      fillOpacity: 0.8,
      scale: 0.02,
      strokeColor: burritoPlace.score > 50 ? 'green' : 'red',
      strokeWeight: 14
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
      content: `PEAKS Score: ${burritoPlace.score}`
    });

    // when the marker is clicked on, alert the name
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });
  }

  listenForMove() {
    /*
     * we listen for the map to emit an 'idle' event, it does this when
     * the map stops moving
     */
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      // alert('map has moved, check console to see updated bounds');

      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
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
      <div>
        <span>MAP DEMO</span>
        <div id='map' ref='map'/>
        <p>
          PEAKS Scores prototype for Alaska Policy Forum
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Map center={mapCenter} burritoPlaces={burritos}/>,
  document.getElementById('root')
);
