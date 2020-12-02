import React,{Component} from 'react'

class UnmountB extends Component{
    componentWillUnmount(){
        console.log('removed')
    }
    render(){
        return(<>
            <h1>child</h1>
        </>)
    }
}

export default UnmountB