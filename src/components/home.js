import React,{Component} from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
import Box6 from './Box6'
import Box7 from './Box7'
import Box8 from './Box8'
import Box9 from './Box9'
import Box10 from './Box10'
import Footer from './Footer'

class home extends Component{
    constructor(){
        super()
        this.state = {
            var1 : 2,
        }
    }
    render() {return(
        <div>
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
            <Box5 />
            <Box6 />
            <Box7 />
            <Box8 />
            <Box9 />
            <Box10 />
            <Footer />
    </div>
     ) }
}

export default home