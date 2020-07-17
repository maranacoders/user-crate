import React, { Component } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
class Stackoverflow_api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: null,
            loading: true,
            show:true
        }
    }
    componentDidMount() {
    if(this.props.show =="true"){
        axios.get(`https://api.stackexchange.com/2.2/users/${this.props.userid}?order=desc&sort=reputation&site=stackoverflow&filter=!)rTkr_c(3wV5CTd)U0HM`)
            .then((res) => {
                console.log(res)
                console.log(res.data.items[0])
                this.setState({                   
                    apiData: res.data.items[0],
                    loading:false
                })
            }).catch((err) => {
                console.log(err)
            })         
    }else{
        this.setState({
            show:false
        })
    }

}

    render() {
        return (            
        <>
                {this.state.show ? (this.state.loading ? <Loader /> :
                    (
                    <>
                    <h2>Stack Overflow Profile</h2>
                    <div>   
                    name:   {this.state.apiData.display_name}<br/>                     
                       Reputation : {this.state.apiData.reputation} <br/>
                       About me:   {this.state.apiData.about_me}<br/>
                       Answer Count:   {this.state.apiData.answer_count}<br/>
                       Link :  {this.state.apiData.link}<br/>
                        <img height="100" width="100" src={this.state.apiData.profile_image} alt="no image found"/>
                    </div>
                    </>
                    ) ) :''}
        </>
        );
    }
}

export default Stackoverflow_api;