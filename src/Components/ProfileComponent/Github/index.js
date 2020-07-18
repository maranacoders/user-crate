import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Loader/Loader';

class GithubApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      repoData: null,
      loader1: true,
      loader2: true,
      show: true,
      showRepo: true,
    };
  }

  componentDidMount() {
    const { show, showRepo, username } = this.props;
    if (show === 'true') {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => {
          this.setState({
            apiData: res.data,
            loader1: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      if (showRepo === 'true') {
        axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then((res) => {
            this.setState({ repoData: res.data, loader2: false });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.setState({
          showRepo: false,
        });
      }
    } else {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const {
      apiData, show, loader1, showRepo, loader2, repoData,
    } = this.state;
    return (
      <>
        {show ? (
          loader1 ? (
            <Loader />
          ) : (
            <>
              <h2>Github Profile </h2>
              <div>
                {apiData.name}
                {' '}
                <br />
                {apiData.html_url}
                <br />
                {apiData.public_repos}
                <br />
                <img
                  height="100"
                  width="100"
                  src={apiData.avatar_url}
                  alt="user avatar"
                />
              </div>
              <div>
                {showRepo ? (
                  loader2 ? (
                    <Loader />
                  ) : (
                    <h2>User Repository</h2>
                        && repoData.map((data, id) => (
                          <div key={`item-${id}`}>
                            <div>
                              Name :
                              {data.name}
                            </div>
                            <div>
                              Fork :
                              {data.fork}
                            </div>
                            <div>
                              Url :
                              {data.html_url}
                            </div>
                          </div>
                        ))
                  )
                ) : (
                  ''
                )}
              </div>
            </>
          )
        ) : (
          ''
        )}
      </>
    );
  }
}

export default GithubApi;
