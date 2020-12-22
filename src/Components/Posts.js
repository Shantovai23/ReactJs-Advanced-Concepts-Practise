import React,{Component } from 'react'
import axios from 'axios'


class Posts extends Component{

    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({posts:response.data
            })
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render(){
        const {posts}=this.state
       
        return(<>
         <h1>HTTP GET REQUEST</h1>
         {posts.length ? posts.map((post)=>{
           return <h4 key={post.id}>{post.title}</h4>
        }) : null}
           
        </>)
    }

}

export default Posts