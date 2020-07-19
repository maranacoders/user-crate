import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Loader/Loader';

class StackoverflowApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      loading: true,
      show: true,
    };
  }

  componentDidMount() {
    const { show, userid } = this.props;
    if (show === 'true') {
      axios
        .get(
          `https://api.stackexchange.com/2.2/users/${userid}?order=desc&sort=reputation&site=stackoverflow&filter=!)rTkr_c(3wV5CTd)U0HM`,
        )
        .then((res) => {
          this.setState({
            apiData: res.data.items[0],
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const { show, loading, apiData } = this.state;
    return (
      <>
        {show ? (
          loading ? (
            <Loader />
          ) : (
            <>
              <h2>Stack Overflow Profile</h2>
              <div>
                name:
                {' '}
                {apiData.display_name}
                <br />
                Reputation :
                {' '}
                {apiData.reputation}
                {' '}
                <br />
                About me:
                {' '}
                {apiData.about_me}
                <br />
                Answer Count:
                {' '}
                {apiData.answer_count}
                <br />
                Link :
                {' '}
                {apiData.link}
                <br />
                <img
                  height="100"
                  width="100"
                  src={apiData.profile_image}
                  alt="user-pic"
                />
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

export default StackoverflowApi;
