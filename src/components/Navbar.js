import React,{Component} from 'react'
import './Navbar.css'
class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render(){
        return (
            <div style={{padding:"0%",margin:"0%"}}>
                <nav style={{backgroundColor:"#00263b",padding:"2rem 2rem"}} class="navbar navbar-expand-lg navbar-light" >
                <img src={require('./images/pimg1.jfif' )} width="40" height="40" style={{marginTop:"0%" , marginRight: "2%",display:"inline"}} alt="my image"/>
                    <a class="navbar-brand" href="#" style={{backgroundColor:"#00263b",color:"white"}}>Planned ParentHood</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"#00263b",color:"white",padding:"0%"}}>
                  <ul class="navbar-nav mr-auto" >
                    
                    
                    <li style={{marginLeft:"80%",}} class="nav-item dropdown" >
                      <a style={{color:"white"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Learn
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">COVID-19</a>
                        <a class="dropdown-item" href="#">Birth-Control</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">More</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown" style={{marginLeft:"5%"}}>
                      <a style={{color:"white"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Get Care
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Schedule an Appointment</a>
                        <a class="dropdown-item" href="#">Insurance</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">More</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown" style={{marginLeft:"5%"}}>
                      <a style={{color:"white"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Get Involved
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Donate</a>
                        <a class="dropdown-item" href="#">Ways to Go</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">More</a>
                      </div>
                    </li>
                    <li class="nav-item" style={{marginLeft:"5%",marginRight:"5%"}}>
                      
                      <a href="/learnmore" class="myButtonnav" style={{}}>Donate</a>
                    </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{backgroundColor:"#40bad5",color:"white"}}>Search</button>
                  </form>
                </div>
              </nav>
            </div>
        )
    }

}

export default Navbar


