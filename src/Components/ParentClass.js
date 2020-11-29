import React,{Component} from 'react'
import Child from './ChildClass'

class ParentClass extends Component{
    constructor(){
        super()
        this.state={
            message:"Hey buddy!"
        }
        this.changeHandler=this.changeHandler.bind(this)
    }

   changeHandler(data){
       alert(`Hello ${this.state.message} ${data}`)
   } 

    render(){
        return(<>
              <Child greeting={this.changeHandler}/>
        </>)
    }
}
export default ParentClass