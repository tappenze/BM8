import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Map from "./components/pages/map";
import Review from "./components/pages/review";
import Info from "./components/pages/info";
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
          <Route path={["/", "/review", "/map", "/info"]} exact component={Navigation}/>
          <Route path="/review" exact component={Review} />
          <Route path="/map" exact component={Map} />
          <Route path="/info" exact component={Info}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
