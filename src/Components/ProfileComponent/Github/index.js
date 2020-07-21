/* eslint-disable  */

import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Loader/Loader';

class GithubApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: undefined,
      repoData: undefined,
      isLoading: true,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { showRepo, username } = this.props;

      const resUser = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      this.setState({ apiData: resUser.data });

      if (showRepo === true) {
        const resRepos = await axios.get(
          `https://api.github.com/users/${username}/repos`,
        );
        this.setState({ repoData: resRepos.data });
      }
    } catch (err) {
      this.setState({ errorMessage: 'There was an error fetching data' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  renderUserDetails = () => {
    const { apiData } = this.state;

    if (!apiData) return;

    const { name, html_url, public_repos, avatar_url } = apiData;

    return (
      <div>
        <h2>Github Profile </h2>
        {name} <br />
        {html_url} <br />
        {public_repos} <br />
        <img height="100" width="100" src={avatar_url} alt="user avatar" />
      </div>
    );
  };

  renderRepoDetails = () => {
    const { repoData } = this.state;

    if (!repoData) return;

    return (
      <div>
        <h2>User Repository</h2>

        {repoData.map((data, id) => (
          <div key={`item-${id}`}>
            Name :{data.name} <br />
            Fork :{data.fork} <br />
            Url :{data.html_url}
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { isLoading, errorMessage } = this.state;
    const { showRepo } = this.props;

    return (
      <React.Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {this.renderUserDetails()}
            {showRepo && this.renderRepoDetails()}
            {errorMessage}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default GithubApi;
