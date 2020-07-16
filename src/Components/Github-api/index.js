import React, { Component } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
class Github_api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: null,
            repoData:null,
            loading: true
        }
    }
    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.username}`)
            .then((res) => {
                this.setState({
                    apiData: res.data
                })
            }).catch((err) => {
                console.log(err)
            })         
            if(this.props.showRepo =="true"){
                axios.get(`https://api.github.com/users/${this.props.username}/repos`)
                .then((res) => {
                    this.setState({ repoData:res.data,
                    loading:false })        
                }).catch((err) => {
                    console.log(err)
                }) 
            }
    }

    render() {
        return (            
        <>
                {this.state.loading ? <Loader /> :
                    (
                    <>
                    <div>                        
                        {this.state.apiData.name} <br/>
                        {this.state.apiData.html_url}<br/>
                        {this.state.apiData.public_repos}<br/>
                        <img height="100" width="100" src={this.state.apiData.avatar_url} alt="no image found"/>
                    </div>
                     <div> <h2>User Repositories</h2>
                    {this.state.repoData.map((data)=>{
                        return(
                            <div>
                        <div>Name : {data.name}</div>
                        <div>Fork : {data.fork}</div>
                        <div>Url :   {data.html_url}</div>
                        </div>
                        )
                    }
                        )}
                    </div>  
                    </>
                    )}
        </>
        );
    }
}

export default Github_api;