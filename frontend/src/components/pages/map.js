import React from "react";
import { Container, Form } from "react-bootstrap";
import Googlemap from '../googleMap';
import GMap from '../GMap';
import ReactTable from "react-table";
import links from "../../f2bLinks/";
import "./style.css";

const API_TOKEN = "AIzaSyDZjoaudGI5dPggoVeXoeq5Hj9_vouZt0M";

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    console.log("before");
    await links.getAllReviews().then((reviews) => {
      console.log("getting reviews");
      console.log(reviews);
      console.log(reviews.data);
      this.setState({
        reviews: reviews.data,
        isLoading: false,
      });
    });
    console.log("the state reviews is");
    console.log(this.state.reviews);
  }

  render() {
    // let map;
    // const Loader = google.maps.plugins.loader.Loader;
    // const additionalOptions = {};
    // // [START maps_programmatic_load_promise]
    // const loader = new Loader({
    //   apiKey: "AIzaSyDZjoaudGI5dPggoVeXoeq5Hj9_vouZt0M",
    //   version: "weekly",
    //   ...additionalOptions,
    // });
    // loader.load().then(() => {
    //   map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // });
    const { reviews, isLoading } = this.state;

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Text",
        accessor: "text",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
    ];

    let showTable = true;
    // if (!reviews.length) {
    //     showTable = false
    // }

    return (
      <div>
        <p>should be showing table</p>
        
        {/* <script defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZjoaudGI5dPggoVeXoeq5Hj9_vouZt0M&callback=initMap">
        </script> */}
        <div>
          <table className="table">
            <thead key="thead">
              <tr>
                <th>ID</th>
                <th>Rating</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {this.state.reviews.map((c) => (
                <tr key={c._id}>
                  <td>{c._id} </td>
                  <td>{c.Rating}</td>
                  <td>{c.Text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Googlemap/>
      </div>
    );
  }
}
