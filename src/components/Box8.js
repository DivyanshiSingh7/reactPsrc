import React,{Component} from 'react'
import './Box8.css'
class Box8 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className="box8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                            <h1 style={{textAlign:"left",paddingRight:"30%"}}><strong>Accidents Happen. That’s Why There’s Emergency Contraception</strong></h1>
                            <br />
                            <p style={{textAlign:"left", paddingRight: "5%"}}>Emergency contraception is a safe and effective way to prevent pregnancy up to 5 days after unprotected sex. There are a few different kinds. Find out which one is right for you.</p>
                            <br />
                            <a style={{marginRight:"70%"}} href="/learnmore" class="myButtonbox8">Learn More</a>
                        </div>
                        <div className="col-md-6">
                        <img src={require('./images/box8img.jfif' )} width="500" height="300" style={{marginTop:"20%" , marginLeft: "15%"}} alt="my image"/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
} 

export default Box8