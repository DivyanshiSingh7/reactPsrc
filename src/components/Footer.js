import React,{Component} from 'react'
import './Footer.css'
class Footer extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
           

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className = "col-md-6">
                            <div className="row" style={{paddingTop:"5%"}}>
                                <div className = "col-md-2">
                                    <img src={require('./images/pimg1.jfif' )} width="80" height="80" style={{marginTop:"20%" , marginLeft: "0%",display:"inline"}} alt="my image"/>
                                </div>
                                <div className="col-md-2">
                                    <h1 style={{color:"white", textAlign:"left", paddingRight:"50%" , paddingTop:"5%"}}>Planned ParentHood</h1>
                                </div>
                                
                            </div>
                            <div className="row">
                                <p style={{color:"white", textAlign:"left",paddingLeft:"3%"}}>Planned Parenthood delivers vital reproductive health care, sex education, and information to millions of people worldwide. Planned Parenthood Federation of America, Inc. is a registered 501(c)(3) nonprofit under EIN 13-1644147. Donations are tax-deductible to the fullest extent allowable under the law.</p>
                            </div>
                            <div className="row" style={{paddingTop:"5%"}}>
                                <div className="col-md-2">
                                    <a href="/learnmore" class="fa fa-facebook">f</a>
                                </div>
                                <div className="col-md-2">
                                    <a href="/learnmore" class="fa fa-twitter"><img style={{marginBottom:"10%"}} src={require('./images/twitterimg.jfif' )} width="40" height="40" style={{marginTop:"20%" , marginLeft: "0%",display:"inline"}} alt="my image"/></a>
                                    <br />
                                    
                                </div>

                                
                                
                            </div>
                        </div>
                        <div className ="col-md-6">
                            <div className="row" style={{paddingTop:"5%"}}>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}><strong>About Us</strong></p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}><strong>Get Involved</strong></p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}><strong>Resources</strong></p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}><strong>About This Site</strong></p></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Who We Are</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Take Action</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Jobs</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Terms of Use</p></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Leadership</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Share Story</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>NewsRoom</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Privacy Policy</p></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Annual Reports</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Volunteers</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Press Releases</p></a>
                                </div>
                                <div className="col">
                                    <a style={{color:"white"}} href="/learnmore"><p style={{color:"white"}}>Contact Us</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{backgroundColor:'white', width:"100%"}} />
                    <div className="row">
                        <div className = "col-md-6">
                            <p style={{color:"white", textAlign:"left"}}>© 2020 Planned Parenthood Federation of America Inc.</p>
                        </div>
                        <div className ="col-md-6">
                                
                                <div className="row">
                                    <div className = "col">
                                        <p style={{color:"white"}}>Privacy Policy</p>
                                    </div>
                                    <div className = "col">
                                        <p style={{color:"white"}}>Terms of use</p>
                                    </div>
                                    <div className = "col">
                                        <p style={{color:"white"}}> Contact Us</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Footer



 