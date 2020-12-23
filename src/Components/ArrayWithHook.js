import React, { useState } from 'react'

const ArrayWithHook=()=>{
   const [list,setList]=useState([])

   const GenerateRandom=()=>{
       setList([...list,{
           id:list.length,
           value:Math.random()
       }])
   }
   return(<>
       <button onClick={GenerateRandom}>Generate Random NUmber</button>
       <ul >
           {list.map((lists,index)=>{
               return <li key={lists.id}>{lists.value}</li>
           })}
       </ul>
   </>)
}

export default ArrayWithHook