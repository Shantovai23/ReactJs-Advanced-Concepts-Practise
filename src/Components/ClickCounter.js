import React,{Component} from 'react'
import WithCounter from './HOC/WithCounter'

class ClickCounter extends Component{
   
    render(){
        return(<>
            <h1>Click Counter :{this.props.counter} {this.props.name}</h1>
            <button onClick={this.props.clickHandler}>Click</button>
        </>)
    }
}

export default WithCounter(ClickCounter)