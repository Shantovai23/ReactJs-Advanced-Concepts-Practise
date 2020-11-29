import React,{Component} from 'react'

class Condition extends Component{
    constructor(){
        super()
        this.state={
            isAuth:true
        }
    }


    render(){
             //NORMAL CONDITION
            // if(this.state.isAuth){
            //   return  <h3>Hello User</h3>
            // }else{
            //   return <h3>Hello Guest</h3> 
            // }
             

            //CONDITION WITH VARIABLE
            // let msg;
            // if(this.state.isAuth){
            //     return msg=<h3>Hello User</h3>
            // }else{
            //     return msg=<h3>Hello Guest</h3> 
            // }
            

            //CONDITION TURNARY
            //return  this.state.isAuth?<h3>Hello User</h3>: <h3>Hello Guest</h3> 
            

            //CONDITION WITH SHORT CIRCUIT

            return this.state.isAuth && <h3>Hello User</h3>

           
        
    }
}

export default Condition