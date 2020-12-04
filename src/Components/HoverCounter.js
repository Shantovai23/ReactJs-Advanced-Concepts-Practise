import React,{Component} from 'react'
import WithCounter from './HOC/WithCounter'

class HoverCounter extends Component{
    render(){
        return(<>
            <h1>Hover Counter :{this.props.counter}  {this.props.name}</h1>
            <button onMouseOver={this.props.clickHandler}>Click</button>
        </>)
    }
}

export default WithCounter( HoverCounter)