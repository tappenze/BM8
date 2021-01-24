import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Map from "./components/pages/map";
import Review from "./components/pages/review";
import NavBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <p>visible on all pages</p>
        <BrowserRouter>
          <Route path={["/", "/review", "/map"]} exact component={NavBar}/>
          <Route path="/review" exact component={Review} />
          <Route path="/map" exact component={Map} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
