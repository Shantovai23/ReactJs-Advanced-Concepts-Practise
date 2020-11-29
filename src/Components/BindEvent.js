import React,{Component} from 'react'


class BindEvent extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Hey There!'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Good Night!'
        })
    }

    render(){
        return(<>
            <h3>{this.state.message}</h3>
            <button onClick={this.clickHandler}>Click</button>
           
        </>)
    }
}

export default BindEvent