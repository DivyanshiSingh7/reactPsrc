import React,{Component} from 'react'
import './Box2.css'
class Box2 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div class = "box2" style={{textAlign:"center"}}>
                <h1 style={{paddingTop:"5%", textAlign:'center'}}><strong>Birth Control</strong></h1>
                <p>Birth control is how you prevent pregnancy. There are lots of different birth control options out there.</p>
                <p>We’re here to help you figure it all out.</p>
                <p><strong>Pick what’s important to you to find your best birth control method:</strong></p>
                <br />

                

            </div>

            
        )
    }
} 

export default Box2

/*

<div className="row">
                    
                    <div className="col" style={{float:"left",width:"33.3%",marginBottom:"16px",padding:" 0 8px"}}>
                        <div class="card" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",marginLeft:"50%",zIndex:"100",width:"200px"}}> 
                        <p>Best at Preventing Pregnancy</p> 
                        </div> 
                    </div>
                    <div className="col" style={{float:"left",width:"33.3%",marginBottom:"16px",padding:" 0 8px"}}>
                        <div class="card" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",marginLeft:"30%",zIndex:"100",width:"200px",height:"100%"}}> 
                        <p style={{textAlign:"center",paddingTop:"10%"}}>Easiest to Use</p> 
                        </div> 
                    </div>
                    <div className="col" style={{float:"left",width:"33.3%",marginBottom:"16px",padding:" 0 8px"}}>
                        <div class="card" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",marginLeft:"10%",zIndex:"100",width:"200px",height:"100%"}}> 
                        <p style={{textAlign:"center",paddingTop:"10%"}}>Help Prevent STDs</p> 
                        </div> 
                    </div>

                </div>


                */