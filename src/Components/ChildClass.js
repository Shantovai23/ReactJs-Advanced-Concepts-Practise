import React from 'react'

const ChildClass=(props)=>{
    return(<>
        {/* <button onClick={props.greeting}>Click</button> */}
          <button onClick={()=>{props.greeting("from Child")}}>Click</button>

    </>)
}

export  default ChildClass