import React,{Component} from 'react'

class HoverCounter2 extends Component{

    render(){
        return(<>
            <h1> value :{this.props.value}</h1>
            <button onMouseOver={this.props.handle}>Hover</button>
        </>)
    }
}

export default HoverCounter2