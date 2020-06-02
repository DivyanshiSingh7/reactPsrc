import React,{Component} from 'react'
import './Box10.css'
class Box10 extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return(
            <div className="box10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{paddingTop:"5%",textAlign:"center"}}>
                            <h1 style={{textAlign:"left",paddingRight:"10%"}}><strong>Book an Appointment</strong></h1>
                            
                        </div>
                        <div className="col-md-6" style={{paddingTop:"3%",textAlign:"center",paddingLeft:"10%"}}>
                            <div className="row">
                                <p>ZIP, CITY, OR STATE</p>
                            </div>
                            <div className="row">
                                <input style={{width:"50%"}} type="text" class="form-control" placeholder="Search for..."></input>
                                <a href="/learnmore" class="myButtonbox10">Search</a>
                            </div>
                            <div className="row" style={{paddingTop:"3%"}} >
                                
                                <p>Or call <a href="#">1-800-230-7526</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Box10

/*
<div class = "box10">
                <div></div>
                
                <h1><strong></strong></h1>
            </div>



            background: #424242;
    border-radius: 0;
    color: #;
    border-width: 1px;
    border-style: solid;
    border-color: #1c1c1c;


     background: #1c1c1c;
    color: #fff;




    <span class="input-group-btn">
                                <button class="btn btn-search" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
                                </span>







                                .btn-search {

    box-shadow:inset 0px 1px 0px 0px #efdcfb;
	background:linear-gradient(to bottom, #dfbdfa 5%, #06010a 100%);
	background-color:#dfbdfa;
	border-radius:6px;
	border:1px solid #c584f3;
	display:inline-block;
	cursor:pointer;
	color:white;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
    text-shadow:0px 1px 0px #9752cc;
    
  }
  .btn-search:link, .btn-search:visited {
    color: #fff;
  }
  .btn-search:active, .btn-search:hover {

    background:linear-gradient(to bottom, #06010a 5%, #dfbdfa 100%);
    background-color:#06010a;
    position:relative;
	top:1px;
  }
*/