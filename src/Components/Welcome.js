import React,{Component} from 'react'

class Welcome extends Component{

     constructor(props){
         super(props)
         this.state={
             message:"Login",
             buttonText:"Login",
             count:0
         }
     }

     ChangeIssue=()=>{
         this.setState((pre,props)=>({
            message:"You are Logged In",
            buttonText:"Logout"  ,
            count:pre.count+props.flag
         }))
        }

         changeFive=()=>{
             this.ChangeIssue()
             this.ChangeIssue()
             this.ChangeIssue()
             this.ChangeIssue()
             this.ChangeIssue()
         }

    render(){
        return(<>
            <h3>{this.state.message}</h3>
            <h4>{this.state.count}</h4>
            <button onClick={this.changeFive}>{this.state.buttonText}</button>
        </>)
    }
}

export default Welcome
