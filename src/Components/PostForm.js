import React,{Component} from 'react'
import axios from 'axios'

class PostForm extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            university: ''
        }
        this.changeHandler=this.changeHandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }

    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }



    submitHandler(e){
     e.preventDefault()
     axios.post('https://reqres.in/api/users',this.state)
     .then((response)=>{
         console.log(response)
     })
     .catch((err)=>{
         console.log(err)
     })
    this.setState({name:'',university:''})
    }



    render(){
        return(<>
            <h1>HTTP POST REQUESt</h1>
            <br/>

            <form onSubmit={this.submitHandler} >

            <input value={this.state.name} type='text' name='name' onChange={this.changeHandler} style={{display:'block' ,margin:'5px auto'}}></input>
            <input value={this.state.university} type='text' name='university' onChange={this.changeHandler} style={{display:'block' ,margin:'0 auto'}}></input>
            <button type='submit' style={{display:'block',margin:'5px auto'}}>Submit</button>
            </form>
        </>)
    }
}

export default PostForm