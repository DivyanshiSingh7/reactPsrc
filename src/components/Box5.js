import React,{Component} from 'react'
import './Box5.css'
class Box5 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className="box5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" >
                        <img src={require('./images/box5img2.jfif' )} width="400" height="200" style={{marginTop:"20%" , marginLeft: "15%" , backgroundColor:"#abf0e9"}} alt="my image"/>
                        
                    </div>
                    <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                        <h1 style={{textAlign:"left",paddingRight:"10%" , paddingLeft:"5%"}}><strong>Need care fast without insurance?</strong></h1>
                        <br />
                        <p style={{textAlign:"left", paddingRight: "10%" , paddingLeft:"5%"}}>Get birth control or UTI prescriptions delivered to your door with the Planned Parenthood Direct app.</p>
                        <br />
                        <a style={{marginRight: "60%" ,paddingLeft:"5%"}} href="/learnmore" class="myButton">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
} 

export default Box5

/*
<div class = "box5">
                <h1><strong></strong></h1>
                <p></p>
                
            </div>

            */