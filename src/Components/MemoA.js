import React,{Component} from 'react'
import MemoB from './MemoB'

class MemoA extends Component{
     constructor(){
         super()
         this.state={
             id:5
         }
     }

     componentDidMount(){
         setInterval(()=>{
           this.setState({
               id:5
           })
         },2000)
     }

    render(){
        return(<>
           <MemoB id={this.state.id}/>
        </>)
    }
}

export default MemoA