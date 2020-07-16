import React, { Component } from "react";
import * as Constants from "../Utils/Constants";
import Loading from "../Components/Loader/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StrekName, StrekHome } from "./Strek/App";
import {AmrName,AmrHome} from "./Amr/App"

class ProfilesMain extends Component {
  state = { loading: true, user: "" };
  componentDidMount() {

    let route = this.props.match.url;
    console.log(route.slice(9, route.length));
    if (Constants.default.users.includes(route.slice(9, route.length))) {
      console.log("yes");
    } else {
      this.props.history.push("/pagenotfound");
    }
    this.setState({ loading: false });
  }
  render() {
    return this.state.loading ? (
      <Loading />
    ) : (
      <>
      
      <Router>
        <Switch>
          <Route path={`/profile/${StrekName()}`} component={StrekHome} />
          <Route path={`/profile/${AmrName()}`} component={AmrHome}/>
        </Switch>
      </Router>
      </>
    );
  }
}
export default ProfilesMain;
