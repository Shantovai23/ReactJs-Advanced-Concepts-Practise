import React,{PureComponent} from 'react'

class PureCom extends PureComponent{
    constructor(){
        super()
        this.state={
            check:5
        }
    }
    componentDidMount(){
        setInterval(()=>{
         this.setState({
             check:this.state.check+1
         })
        },2000)
    }
    render(){
        console.log('rendered')
        return(<><h1>count : {this.state.check}</h1></>)
    }
}
export default PureCom