import React,{Component} from 'react' 
import './MyPage.css'
class MyPage extends Component {
    constructor(){
        super()
        this.state = {

           // arr : [[1,1,1,1,1,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0],[1,1,1,1,1,0,0,0,0,1],[1,1,0,0,1,1,1,1,1,1],[1,0,1,1,0,0,0,1,1,1],[1,0,0,0,1,0,0,0,0,0]],
            arr : [[1,1,1,1,1,0,0,0,0,1],[1,1,0,0,1,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0],[1,1,1,1,1,0,0,0,0,1],[1,1,1,0,1,1,1,1,1,1],[1,0,0,1,1,0,0,1,1,1],[1,0,1,0,1,0,0,0,0,0]],
            display_methods: [1,1,1,1,1,1,1,1,1,1],   // number of properties
            buttons_clicked: [0,0,0,0,0,0,0,0],    // number of buttons


        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (button_id,event) => {
      //  console.log('button id',button_id)
     //   console.log('old button',this.state.buttons_clicked)
        let new_arr = this.state.buttons_clicked.slice()
        if(this.state.buttons_clicked[button_id]==0){
            new_arr[button_id] = 1
          //  this.setState({buttons_clicked: new_arr,completed :1})

         //   console.log('new buttons',this.state.buttons_clicked)
        }
        else if(this.state.buttons_clicked[button_id]==1)
        {
            new_arr[button_id] = 0
           // this.setState({buttons_clicked : new_arr, completed:1})

          //  console.log('new buttons',this.state.buttons_clicked)
        }
       
        
       let temp_arr = [1,1,1,1,1,1,1,1,1,1]    // number of properties
       new_arr.map((curr_button ,ind)=> {
       // console.log(curr_button,ind)
           if(curr_button === 1)
           {
              
                this.state.arr[ind].map((active,index) => {
                    
                    if(active==0){
                        temp_arr[index] = 0 
                     //   this.setState({display_methods:temp_arr})
                    }
                })
              //  console.log('display', this.state.display_methods)
            }
        })

        this.setState({buttons_clicked:new_arr,display_methods:temp_arr})
       
    }

    render(){

        const mystyle = {
            color: "black",
            backgroundColor: "#faf2f2",
        }
        
            // Implant
        const listt1 = [<div style={{mystyle}}>
                            <p><strong>Best at Preventing pregnancy</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Less than 1 out of 100 people will get pregnant each year</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Mistake Proof</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Once it’s in place, you don’t need to do anything for up to 4 years</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Helps with periods</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Can make periods and cramps lighter or go away altogether (only hormonal IUDs)</li>
                            </ul>
                        </div>,
                        <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doctor Required </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>You do need to see a doctor or nurse for this</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Progestin-only and no estrogen</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Doesn't reduce sexual pleasure </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Isn't known to affect libido/sensation</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Easy to keep private </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>This is a rod about the size of a matchstick placed just under the skin of your upper arm. Once it’s healed no one can see that the rod is there.</li>
                            </ul>
                        </div>
                    
                    ]  // name of buttons

                        //IUD
        const listt2 = [<div style={{mystyle}}>
                            <p><strong>Best at Preventing pregnancy</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Less than 1 out of 100 people will get pregnant each year</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Mistake Proof</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Once it’s put in, there’s nothing you need to do for up to 3-12 years</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Helps with periods</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Can make periods and cramps lighter or go away altogether (only hormonal IUDs)</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doctor Required </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>You do need to see a doctor or nurse for this</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>No hormones in copper IUD</li>
                                <li style={{color:"black",textAlign:"left"}}>No estrogen in hormonal IUDs</li>
                            </ul>
                        </div> ,
                         <div></div>, <div></div>        
    
        ]
        // sHOT
        const listt3 = [<div style={{mystyle}}>
                            <p><strong>Best at Preventing pregnancy</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Only 6 out of 100 people will get pregnant each year</li>
                                <li style={{color:"black",textAlign:"left"}}>Works even better if you always get it on time</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Helps with periods</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Can make periods and cramps lighter or go away altogether</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doctor Required </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>You do need to see a doctor or nurse for this</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Progestin-only and no estrogen</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Easy to keep private </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Nothing you have to wear on or in your body. No one, not even your partner, will ever know about it unless you decide to tell them.</li>
                            </ul>
                        </div>

        ]
        // Ring
        const listt4 = [<div style={{mystyle}}>
                            <p><strong>Best at Preventing pregnancy</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Only 9 out of 100 people will get pregnant each year</li>
                                <li style={{color:"black",textAlign:"left"}}>Works even better if you always change your ring on time</li>
                            </ul>
                        </div>,
                        <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Helps with periods</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Regulates and lightens periods, eases period symptoms</li>
                                <li style={{color:"black",textAlign:"left"}}>Can be used to skip periods</li>
                            </ul>
                        </div>,
                        <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doctor Required </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>You do need to see a doctor or nurse for this</li>
                            </ul>
                        </div>,
                        <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doesn't reduce sexual pleasure </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Isn't known to affect libido/sensation</li>
                            </ul>
                        </div>,
                        <div></div>
        ]
        // Pill
        const listt5 = [<div style={{mystyle}}>
                            <p><strong>Best at Preventing pregnancy</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Less than 1 out of 100 people will get pregnant each year</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Mistake Proof</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Once it’s in place, you don’t need to do anything for up to 4 years</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Helps with periods</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Can make periods and cramps lighter or go away altogether (only hormonal IUDs)</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doctor Required </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>You do need to see a doctor or nurse for this</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Progestin-only and no estrogen</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Doesn't reduce sexual pleasure </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Isn't known to affect libido/sensation</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Easy to keep private </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>This is a rod about the size of a matchstick placed just under the skin of your upper arm. Once it’s healed no one can see that the rod is there.</li>
                            </ul>
                        </div>  

        ]
        // Condom
        const listt6 = [
                            <div></div>,
                            <div></div>,
                            <div></div>,
                         <div style={{mystyle}}>
                            <p><strong>Helps Prevent STIs </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Helps prevent STIs during oral, vaginal, or anal sex</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>No Hormones</li>
                            </ul>
                        </div>,
                         <div></div>,
                         <div></div>

        ]
        //Female Condom
        const listt7 = [
            <div></div>, <div></div>, <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Helps Prevent STIs </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Helps prevent STIs during vaginal, or anal sex</li>
                            </ul>
                        </div>,
                         <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>No Hormones</li>
                            </ul>
                        </div>,
                         <div></div>,
                         <div></div>

        ]
        // Spermicide
        const listt8 = [ <div></div>, <div></div>, <div></div>, <div></div>, <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>No Hormones</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Doesn't reduce sexual pleasure </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Isn't known to affect libido/sensation</li>
                            </ul>
                        </div>,
                         <div></div>,

        ]
        // Fertility Awareness
        const listt9 = [ <div></div>, <div></div>, <div></div>, <div></div>, <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>No Hormones</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Doesn't reduce sexual pleasure </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Isn't known to affect libido/sensation</li>
                            </ul>
                        </div>,
                         <div></div>


        ]
        // Sterlixation
        const listt10 = [<div style={{mystyle}}>
                            <p><strong>Best at Preventing pregnancy</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>LLess than 1 out of 100 people will get pregnant each year</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Mistake Proof</strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Once you get sterilized, there’s nothing else you need to do</li>
                            </ul>
                        </div>,  
                         <div></div>,
                        <div></div>,
                        <div style={{mystyle}}>
                            <p><strong>Doctor Required </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>You do need to see a doctor or nurse for this</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Less or No Hormones </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>No Hormones</li>
                            </ul>
                        </div>,
                        <div style={{mystyle}}>
                            <p><strong>Doesn't reduce sexual pleasure </strong></p>
                            <ul>
                                <li style={{color:"black",textAlign:"left"}}>Isn't known to affect libido/sensation</li>
                            </ul>
                        </div>,
                         <div></div>

        ]

        const property_names = [<div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Birth Control Implant</h1>
                                        <p>99% Effective</p>
                                        <p>Lasts upto 5 years</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt1[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Intrauterine device (IUDs)</h1>
                                        <p>99% Effective</p>
                                        <p>Lasts Up To 3-12 years</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt2[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Birth Control Shot</h1>
                                        <p>96% Effective</p>
                                        <p>Get every 3 months</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt3[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Birth Control Vaginal Ring</h1>
                                        <p>91% Effective</p>
                                        <p>Replace monthly</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                       
                                        {value==1?listt4[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Birth Control Pill</h1>
                                        <p>91% Effective</p>
                                        <p>Take Daily</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt5[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Condom</h1>
                                        <p>87% Effective</p>
                                        <p>Use every time</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt6[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Female Condom</h1>
                                        <p>79% Effective</p>
                                        <p>Use every time</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt7[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Spermicide</h1>
                                        <p>79% Effective</p>
                                        <p>Use every time</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt8[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Fertility Awareness</h1>
                                        <p>77-92% Effective</p>
                                        <p>Use Daily</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt9[index]:null}
                                        </div>
                                    ))}
                                </div>,
                                <div>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Sterilization (Tubal Ligation)</h1>
                                        <p>99% Effective</p>
                                        <p>Lasts for Life</p>
                                    </div>
                                    {this.state.buttons_clicked.map((value,index) => (
                                        <div style={mystyle}>
                                        {value==1?listt10[index]:null}
                                        </div>
                                    ))}
                                </div>
                                
                                
                                ]    // properties buttons fixed

        return (
            <div style={{marginTop:"5%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        {this.state.buttons_clicked[0]==0?<button class="myButtonm" onClick ={()=> this.handleClick(0)}>Best at preventing pregnancy</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(0)}>Best at preventing pregnancy</button>}
                            
                        </div>
                        <div className="col-md-3">
                        {this.state.buttons_clicked[1]==0?<button class="myButtonm" onClick ={()=> this.handleClick(1)}>Easiest to use (Mistake Proof)</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(1)}>Easiest to use (Mistake Proof)</button>}
                            
                        </div>
                        <div className="col-md-3">
                        {this.state.buttons_clicked[2]==0?<button class="myButtonm" onClick ={()=> this.handleClick(2)}>Helps with periods</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(2)}>Helps with periods</button>}
                            
                        </div>
                        <div className="col-md-3">
                        {this.state.buttons_clicked[3]==0?<button class="myButtonm" onClick ={()=> this.handleClick(3)}>Helps prevent STIs</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(3)}>Helps prevent STIs</button>}
                            
                        </div>  
                        
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3">
                            {this.state.buttons_clicked[4]==0?<button class="myButtonm" onClick ={()=> this.handleClick(4)}> Doctor or Nurse Required</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(4)}>Doctor or Nurse Required</button>}
                            
                        </div>
                        <div className="col-md-3">
                            {this.state.buttons_clicked[5]==0?<button class="myButtonm" onClick ={()=> this.handleClick(5)}>Less or No Hormones</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(5)}>Less or No Hormones</button>}
                            
                        </div>
                        <div className="col-md-3">
                            {this.state.buttons_clicked[6]==0?<button class="myButtonm" onClick ={()=> this.handleClick(6)}>Doesn't reduce sexual pleasure</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(6)}>Doesn't reduce sexual pleasure</button>}

                        </div>
                        <div className="col-md-3">
                            {this.state.buttons_clicked[7]==0?<button class="myButtonm" onClick ={()=> this.handleClick(7)}>Easy to keep private</button>:<button  class="myButtonp" onClick ={()=> this.handleClick(7)}>Easy to keep private</button>}
                            
                        </div>                        
                    </div>
                    <br />
                    
                    
                    <div className="container" style={{marginLeft:"10%"}}>
                        <div className="row" >
                                {this.state.display_methods.map((value,index) => (
                            
                                value==1?  <div className="col-md-3" style={{margin:"1%",border:"solid",borderWidth:"1px",backgroundColor:"#f3e1e1",borderRadius:"28px",color:"black",textAlign:"center"}}> {property_names[index] }</div>:null
                            
                            
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MyPage 
/* {this.state.buttons_clicked} <br />
                {this.state.display_methods}

                */