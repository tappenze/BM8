import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import { RiSurgicalMaskLine, RiHandSanitizerLine, RiPinDistanceLine } from "react-icons/ri";
import links from "../../f2bLinks";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 40.424,
        lng: -86.929,
      },
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  //   onMapClicked = (props) => {
  //     if (this.state.showingInfoWindow) {
  //       this.setState({
  //         showingInfoWindow: false,
  //         activeMarker: null,
  //       });
  //     }
  //   };
  async componentDidMount() {
    // this.setState({ isLoading: true });
    // console.log("before");
    console.log("in the map one");
    let reviews = await links.getAllReviews();
    console.log(reviews);
    console.log(typeof this.state.thingies);
    this.setState({
      reviews: reviews.data,
      // isLoading: false,
    });
    // console.log("the state reviews is");
    // console.log(this.state.reviews);
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("updating address");
        this.setState({ address });
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const containerStyle = {
      position: 'relative',  
      width: '50%',
      height: '50%'
    }
    const {google} = this.props;
    return (
      <div id="googleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Map
        // containerStyle={containerStyle}
          google={this.props.google}
          // onClick={this.onMapClicked}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          // onClick={(event) => console.log(event)}
        >
          {this.state.reviews.map((c) => (
            <Marker
              title={c.Address}
              name={<div>
                <p>{c.Text}</p>
                <br></br>
                <p>Social Distancing Score: <b>{c.Social}</b> / 5</p>
                <br></br>
                <p>Mask Rating: <b>{c.Rating}</b> / 5</p>
                <br></br>
              <p>Sanitation: <b>{c.Sanitation}</b> / 5</p>
              </div>}
              onClick={this.onMarkerClick}
              position={{ lat: c.Lat, lng: c.Lng }}
              // icon={{ 
              //   url: './medical.png',
              //   anchor: new google.maps.Point(32,32),
              //   scaledSize: new google.maps.Size(64,64)
              // }}
            >
            </Marker>
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <p>{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZjoaudGI5dPggoVeXoeq5Hj9_vouZt0M",
})(MapContainer);
