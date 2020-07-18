import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Constants from '../Utils/Constants';
import Loading from '../Components/Loader/Loader';
import { StrekName, StrekHome } from './Strek/App';
import { AmrName, AmrHome } from './Amr/App';

class ProfilesMain extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    let { match, history } = this.props;
    const route = match.url;
    console.log(route.slice(9, route.length));
    if (Constants.default.users.includes(route.slice(9, route.length))) {
      console.log('yes');
    } else {
      history.push('/pagenotfound');
    }
    this.setState({ loading: false });
  }

  render() {
    const {loading}=this.state;
    return loading ? (
      <Loading />
    ) : (
      <>
        <Router>
          <Switch>
            <Route path={`/profile/${StrekName()}`} component={StrekHome} />
            <Route path={`/profile/${AmrName()}`} component={AmrHome} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default ProfilesMain;
