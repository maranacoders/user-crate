/* eslint-disable  */

import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import './Github.css'

class GithubApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: undefined,
      repoData: undefined,
      isLoading: true,
      currentPage: 1,
      currentPosts: null,
      postsPerPage: 6,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  pageCalculation = () => {
    const { currentPage, postsPerPage, repoData } = this.state
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = repoData.slice(indexOfFirstPost, indexOfLastPost);
    return this.setState({
      currentPosts: currentPosts
    })
  }

  paginate = (pageNumber) => {
    console.log('clickdone', pageNumber)
    this.setState({
      currentPage: pageNumber
    }, this.pageCalculation())

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
        const repoArray = []
        resRepos.data.map((data) => {
          repoArray.push(data)
        })
        this.setState({ repoData: repoArray });
        this.pageCalculation();
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

    const { name, html_url, public_repos,
      followers, following,
      avatar_url, bio, location } = apiData;

    const { showRepo } = this.props

    return (
      <div className="GithubProfile">
        <div className="GithubProfile_Card">
          <div className="GithubProfile_Icon">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="profile card" />
          </div>
          <div className="GithubProfile_UserDetails">
            <div className="GithubProfile_Card__img">
              <img src={avatar_url} alt="profile card" />
            </div>
            <div className="GithubProfile_Card__text">
              <div className="GithubProfile_Card__name">{name}</div>
              <div className="GithubProfile_Card__txt">{bio}</div>
              {location === null ? '' : (<div className="GithubProfile_Location"><span className="GithubProfile_Location_Icon">
                <svg className="icon"><use xlinkHref="#icon-location" /></svg>
              </span>
                <span>
                  {location}
                </span>
              </div>)}
              <div className="GithubProfile_Card_Info">
                <div className="GithubProfile_Card_Info_Item">
                  <div className="GithubProfile_Card_Info_Title">{following}</div>
                  <div className="GithubProfile_Card_Info_Text">Followers</div>
                </div>
                <div className="GithubProfile_Card_Info_Item">
                  <div className="GithubProfile_Card_Info_Title">{followers}</div>
                  <div className="GithubProfile_Card_Info_Text">Following</div>
                </div>
                <div className="GithubProfile_Card_Info_Item">
                  <div className="GithubProfile_Card_Info_Title">{public_repos}</div>
                  <div className="GithubProfile_Card_Info_Text">Repositories</div>
                </div>
              </div>
              <div className="GithubProfile_Card-ctr">
                <button className="GithubProfile_Card__button button_blue_shade">
                  <a href={html_url} >
                    Visit Profile</a></button>
              </div>
            </div>
          </div>
          <svg hidden="hidden">
            <defs>
              <symbol id="icon-location" viewBox="0 0 32 32">
                <title>location</title>
                <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
                <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
              </symbol>
            </defs>
          </svg>
          {showRepo && this.renderRepoDetails()}
        </div>
      </div>

    );
  };

  renderRepoDetails = () => {
    const { repoData, currentPosts, postsPerPage } = this.state;
    if (!repoData) return;
    return (
      <div className="githubRepo_Section">
        <div className="githubRepo">
          {currentPosts.map((data, id) => (
            <a key={`item-${id}`} target="_blank" className="repoChild" href={data.html_url}>
              <div >
                <div className="repoLinkName"> Name :{data.name}</div>
                <div>Description:{data.description !== null ? data.description : '  -'} </div>
              </div>
            </a>
          ))}
        </div>
        {this.pagination(repoData.length, postsPerPage)}
      </div>
    );
  };

  pagination = (totalPosts, postPerPage) => {
    const { currentPage } = this.state
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumbers.push(i);
    }
    return (<div className="pageNumberSection">
      <ul className="pagination">
        {pageNumbers.map(pages => (
          <li key={pages} >
            <div onClick={() => this.paginate(pages)} style={currentPage === pages ? { backgroundColor: '#317dff' } : { backgroundColor: 'lightblue' }}>
              {pages}
            </div>
          </li>
        ))}
      </ul>
    </div>
    )
  }

  render() {
    const { isLoading, errorMessage } = this.state;
    return (
      <React.Fragment>
        {isLoading ? (
          <Loader />
        ) : (
            <div>
              {this.renderUserDetails()}
              {errorMessage}
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default GithubApi;
