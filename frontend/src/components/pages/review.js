import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Form, Col, Row } from "react-bootstrap";
import {
  RiSurgicalMaskLine,
  RiHandSanitizerLine,
  RiPinDistanceLine,
} from "react-icons/ri";
import { TextField, Typography, Slider, makeStyles } from "@material-ui/core";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";
import "./style.css";
import links from "../../f2bLinks/";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      text: "",
      rating: 0,
      social: 0,
      sanitation: 0,
      mapCenter: {
        lat: 40.424,
        lng: -86.929,
      },
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSocialChange = this.handleSocialChange.bind(this);
    this.handleSanitationChange = this.handleSanitationChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {}

  async handleSubmit(event) {
    event.preventDefault();
    console.log("the current state is");
    console.log(this.state);
    await links
      .addReview({
        address: this.state.address,
        text: this.state.text,
        rating: this.state.rating,
        social: this.state.social,
        sanitation: this.state.sanitation,
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng,
      })
      .then(() => {
        console.log("added to database");
      });
  }

  handleTextChange(event) {
    let line = event.target.value.replace(/\n|\r/g, "");
    this.setState({ text: line });
    
  };

  handleRatingChange(event, value) {
    this.setState({ rating: value });
  }

  handleSocialChange(event, value) {
    this.setState({ social: value });
  }

  handleSanitationChange(event, value) {
    this.setState({ sanitation: value });
  }

  handleAddressChange = (address) => {
    this.setState({ address });
    console.log("Changed address to");
    console.log(address);
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
    return (
      <div id="overall">
        <div class="container-review">
          <Form onSubmit={this.handleSubmit}>
            

                  <br></br>
                  <div id="login-box">
                    <h3>Location</h3>
                    <div id="locationSearch">
                      <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleAddressChange}
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
                                  ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer",
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer",
                                    };
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
                    </div>
                    <span id="q4">
                      <Typography id="discrete-slider" gutterBottom>
                        Mask Rating
                        <RiSurgicalMaskLine />
                      </Typography>
                    </span>

                    <Slider
                      defaultValue={this.state.rating}
                      // getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={0}
                      max={5}
                      value={this.state.rating}
                      onChange={this.handleRatingChange}
                    />

                    <span id="q4">
                      <Typography id="discrete-slider" gutterBottom>
                        Social Distanced Rating
                        <RiPinDistanceLine />
                      </Typography>
                    </span>

                    <Slider
                      defaultValue={this.state.social}
                      // getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={0}
                      max={5}
                      value={this.state.social}
                      onChange={this.handleSocialChange}
                    />
                    <span id="q4">
                      <Typography id="discrete-slider" gutterBottom>
                        Overall Sanitation
                        <RiHandSanitizerLine />
                      </Typography>
                    </span>

                    <Slider
                      defaultValue={this.state.sanitation}
                      // getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={0}
                      max={5}
                      value={this.state.sanitation}
                      onChange={this.handleSanitationChange}
                    />
                    <h3>Add any additional comments</h3>
                    <TextField
                      id="outlined-multiline-static"
                      label="Comments"
                      multiline={true}
                      rows={4}
                      fullWidth={true}
                      variant="outlined"
                      value={this.state.text}
                      onChange={this.handleTextChange}
                    />

                    <br></br>
                    <input
                      id="entry-button"
                      className="btn btn-primary"
                      type="submit"
                      value="Enter"
                    />
                  </div>

            {/* <div className="form-group">
              <label>UserName:</label>
              <input className="form-control" type="text" ref="userName" />
    
              <label>Password:</label>
              <input className="form-control" type="text" ref="passWord" />
    
            </div> */}
          </Form>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDZjoaudGI5dPggoVeXoeq5Hj9_vouZt0M",
})(Review);
