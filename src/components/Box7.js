import React,{Component} from 'react'
import './Box7.css'
class Box7 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className="box7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                            <h1 style={{textAlign:"left",paddingRight:"17%"}}><strong>Discouraged by the Cost of Birth Control? We Can Help</strong></h1>
                            <br />
                            <p style={{textAlign:"left", paddingRight: "17%"}}>We do our best to help you afford the birth control method you choose — no matter what your situation is. Whether you have your own health insurance, are on your parents’ plan, or don’t have insurance at all, we’ve got you covered. Find a health center near you.</p>  
                        </div>
                        <div className="col-md-6" style={{paddingTop:"5%" ,textAlign:"center"}}>
                            <div className="row">
                                <p style={{textAlign:"left", paddingRight: "20%" , paddingLeft:"30%"}}>Many insurance plans, including Medicaid, cover Planned Parenthood services.</p>
                                <br />
                                
                            </div>
                            <div className="row" style={{paddingTop:"5%"}}>
                                <p style={{textAlign:"left", paddingRight: "0%" , paddingLeft:"30%"}}>We’ll help you navigate your state’s health insurance plans.<a href="/learnmore">Learn More</a></p>
                                <br />
                            </div>
                            <div className="row" style={{paddingTop:"5%"}}>
                                <p style={{textAlign:"left", paddingRight: "20%" , paddingLeft:"30%"}}>Is health insurance not an option for you? We can get you set up with state or locally funded programs that help cover the cost of your birth control.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Box7

