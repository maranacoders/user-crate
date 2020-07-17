import React, { Component } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
class Github_api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: null,
            repoData:null,
            loader1: true,
            loader2:true,
            show:true,
            showRepo:true
        }
    }
    componentDidMount() {

        if(this.props.show=="true"){
        axios.get(`https://api.github.com/users/${this.props.username}`)
            .then((res) => {
                this.setState({
                    apiData: res.data,
                    loader1:false
                })
            }).catch((err) => {
                console.log(err)
            })         
            if(this.props.showRepo =="true"){
                axios.get(`https://api.github.com/users/${this.props.username}/repos`)
                .then((res) => {
                    this.setState({ repoData:res.data,
                    loader2:false })        
                }).catch((err) => {
                    console.log(err)
                }) 
            }else{
                this.setState({
                    showRepo:false
                })
            }
        }else{
            this.setState({
                show:false
            })
        }
    }
  

    render() {
        return (            
        <>
               {this.state.show ? (this.state.loader1 ? <Loader /> :
                    (
                    <>
                    <h2>Github Profile </h2>
                    <div>                        
                        {this.state.apiData.name} <br/>
                        {this.state.apiData.html_url}<br/>
                        {this.state.apiData.public_repos}<br/>
                        <img height="100" width="100" src={this.state.apiData.avatar_url} alt="no image found"/>
                    </div>
                     <div>
                    {this.state.showRepo ? (this.state.loader2 ? <Loader/>: <h2>User Repository</h2> &&( 
                    
                        this.state.repoData.map((data,id)=>{
                        return(
                            <div key={id}>
                        <div>Name : {data.name}</div>
                        <div>Fork : {data.fork}</div>
                        <div>Url :   {data.html_url}</div>
                        </div>
                        )
                    
                    }
                        ))):''}
                    </div>  
                    </>
                    )):''}
        </>
        );
    }
}

export default Github_api;
