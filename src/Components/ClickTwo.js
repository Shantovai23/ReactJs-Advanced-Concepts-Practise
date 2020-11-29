import React,{Component} from 'react'

class ClickTwo extends Component{
    logout=()=>{
        alert("You just Logged Out")
    }
    render(){
        return(<>
            <button onClick={this.logout}>Logout</button>
        </>)
    }
}
export default ClickTwo