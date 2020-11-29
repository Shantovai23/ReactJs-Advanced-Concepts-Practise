import React from 'react'

const ClickOne=()=>{

    const Logged=()=>{
        alert("You Just Logged In")
    }
    return(<>
        <button onClick={Logged} style={{display:'block', margin:'0 auto'}}>Login</button>
    </>)
}

export default ClickOne