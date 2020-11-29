import React,{Component} from 'react'

class CarTwo extends Component{
    
    constructor(props){
        super(props)
        this.state={
            message:"Work Hard",
            skills:"C C++ JS"
            
        }
    }

    render(){
        const {position,CGPA}=this.props
        const {message,skills}=this.state
        return(<>
            <h2>{position}</h2>
            <h3>{CGPA}</h3>
            <h4>{message}</h4>
            <h5>{skills}</h5>
        </>)
    }
}

export default CarTwo