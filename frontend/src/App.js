/* import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Map from './components/pages/map';
import Review from './components/pages/review';
import NavBar from './components/navbar';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import mapStyles from './mapStyles'

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '100vh',
};
const center = {
  lat: 40.4259,
  lng: -86.908,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onClick={(event) => console.log(event.placeId)}
      ></GoogleMap>
    </div>
  );
}*/

import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Map from "./components/pages/map";
import Review from "./components/pages/review";
import Navigation from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route path={["/", "/review", "/map"]} exact component={Navigation}/>
          <Route path="/review" exact component={Review} />
          <Route path="/map" exact component={Map} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
