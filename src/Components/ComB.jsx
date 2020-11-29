import React,{Component} from 'react'

class ComB extends Component{

    constructor(){
        super()
        this.state={
            newValue:0
        }
    }

    static getDerivedStateFromProps(props,state){
        return{
            newValue: props.data*2
        }
    }
    render(){
        return(<>
             <h1>Component B : {this.state.newValue}</h1>
        </>)
    }
}

export default ComB