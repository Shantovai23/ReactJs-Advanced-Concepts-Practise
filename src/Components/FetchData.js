import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const FetchData=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{

        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])


    return(<>
        <h3>All Users</h3>
       <ol>
       {users.map((user,index)=>{
            return    <li key={user.id}> {user.username}</li>   
        })}
       </ol>

       <h3>All Emails</h3>
       <ol>
       <ol>
       {users.map((user,index)=>{
            return    <li key={user.id}> {user.email}</li>   
        })}
       </ol>
       </ol>
    </>)
}

export default FetchData