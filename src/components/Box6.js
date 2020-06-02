import React,{Component} from 'react'
import './Box6.css'
class Box6 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className="box6">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                        <h1 style={{textAlign:"left"}}><strong>Spot On Period Tracker</strong></h1>
                        <br />
                        <p style={{textAlign:"left", paddingRight: "5%" , lineHeight:"1.5"}}>Spot On is a period and birth control tracking mobile app available for Android and iOS phones that can help you stay on top of your birth control method and track your cycle. The app provides customized appointment reminders, and puts birth control and sexual health resources from the experts at Planned Parenthood at your fingertips.</p>
                        <br />
                        <div className="row">
                            <div className="col">
                            <a style={{marginRight:"40%"}} href="/learnmore" class="myButtonbox6">Download</a>
                            </div>
                            <div className = "col">
                            <a style={{marginRight:"10%"}}href="/learnmore" class="myButtonbox6">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img src={require('./images/clock2.jpg' )} width="350" height="350" style={{marginTop:"5%" , marginLeft: "15%"}} alt="my image"/>
                    </div>
                </div>
            </div>
        </div>

        )
    }
} 

export default Box6

/*

            <div class = "box6">
                <h1><strong></strong></h1>
                <p></p>
                <a style={{marginRight:"70%"}} href="#" class="myButtonbox8">Learn More</a>
            </div>


            
                        
*/