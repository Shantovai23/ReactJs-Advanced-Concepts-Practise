import React, { useState } from 'react'

const ObjectWithHook=()=>{

    const [info,setinfo]=useState({
        name:'',
        university:''
    })

   const  ChangeHandler=(e)=>{
        setinfo({...info,[e.target.name]:e.target.value})
    }

    return(<>
        <form>
        <input autoComplete='off' type='text' value={info.name} name='name' onChange={ChangeHandler}></input>
        <input autoComplete='off' type='text' value={info.university} name='university' onChange={ChangeHandler}></input>
        </form>
        <p> Name: {info.name}</p>
        <p> University: {info.university}</p>
    </>)
}
export default ObjectWithHook