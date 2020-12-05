import React,{Component} from 'react'

class ClickCounter2 extends Component{

    render(){
        return(<>
            <h1> value :{this.props.value}</h1>
            <button onClick={this.props.handle}>Click</button>
        </>)
    }
}

export default ClickCounter2