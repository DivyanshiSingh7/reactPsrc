import React,{Component} from 'react'
import './Box1.css'
class Box1 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            
            <div className="box1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"left"}}>
                            
                            <h3>Book a Tele-Health Visit Today</h3>
                     
                            <h5>We know your health can't wait</h5>
                           
                        </div>
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                            <a href="/learnmore" class="myButton">LEARN ABOUT TELEHEALTH</a>
                            
                        </div>
                    </div>
                </div>
            </div>


        )
    }
} 

export default Box1

/*
<div class = "box1">
                <h1 style={{textAlign:"left",paddingRight:"30%"}}><strong>Accidents Happen. That’s Why There’s Emergency Contraception</strong></h1>
                
                
            </div>

            */