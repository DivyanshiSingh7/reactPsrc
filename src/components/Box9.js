import React,{Component} from 'react'
import './Box9.css'
class Box9 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className = "box9">
            <div className="container">
                <div className="row" >
                    <div className="col">
                        <br />
                        <img src={require('./images/box9img.jfif' )} width="300" height="150" style={{marginTop:"10%" , marginLeft: "15%" , backgroundColor:"#6a097d"}} alt="my image" />
                    </div>
                    <div className="col" >

                        <div className="row" style={{marginTop:"10%"}}><h1 style={{color: "white"}}><strong>Psst! I'm Roo.</strong></h1></div>
                        <div className="row"> <h4 style={{color: "white"}}><strong>Have questions? Our convo is private.</strong></h4></div>
                        <br />
                        <div className="row"><a href="/learnmore" class="myButtonbox9">Chat Now</a></div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
} 

export default Box9
