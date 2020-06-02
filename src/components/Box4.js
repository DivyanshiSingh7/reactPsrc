import React,{Component} from 'react'
import './Box4.css'
class Box4 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className="box4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"left" , paddingBottom:"5%"}}>
                            <h3 style={{color:"white" }}><strong>Which birth control method is right for me?</strong></h3>
                        </div>
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                            <a href="/learnmore" class="myButtonBox4">Take The Quiz</a>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Box4

/*
<div class = "box4">
            
                <div class="box4head"></div>
                <div class="box4sec"></div>
                
            </div>

            */