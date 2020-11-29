import React,{Component} from 'react'
import ComB from './ComB'
class ComA extends Component{
    constructor(){
        super()
        this.state={
            value:0
        }
        this.changeHandler=this.changeHandler.bind(this)
    }

    changeHandler(){
        this.setState({
            value:this.state.value+1
        })
    }

    render(){
        return(<>
            <h1>Component A : {this.state.value} </h1>
            <button onClick={this.changeHandler}>Submit</button>
            <ComB data={this.state.value}/>
        </>)
    }
}
export default ComA