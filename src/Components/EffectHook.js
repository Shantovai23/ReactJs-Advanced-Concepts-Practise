
// import React, { useState, useEffect } from 'react'

// const EffectHook=()=>{

//     const [count ,setcount]=useState(0)
//      useEffect(()=>{
//          document.title=`count ${count}`
//      })


//     return(<>
//          <h1>Count : {count}</h1>
//          <button onClick={()=>setcount(count+1)} >Increment</button>
//     </>)
// }

// export default EffectHook



/////with condition//////



// import React, { useState, useEffect } from 'react'

// const EffectHook=()=>{

//     const [count ,setcount]=useState(0)
//     const [name,setName]=useState('')
//      useEffect(()=>{console.log('Run')
//          document.title=`count ${count}`
//      },[count])


//     return(<>
//          <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
//          <h1> Name: {name}</h1>
//          <h1>Count : {count}</h1>
//          <button onClick={()=>setcount(count+1)} >Increment</button>
//     </>)
// }

// export default EffectHook




/////////once ///////



import React, { useState, useEffect } from 'react'
const EffectHook=()=>{

    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
     
    const loge=(e)=>{
        console.log('loge Running');
       setX(e.clientX)
       setY(e.clientY)
    }
   
    useEffect(()=>{
        console.log('Eff Runing');
        window.addEventListener('mousemove',loge)
    },[])
    return(<>
         <h3>X : {x}  Y : {y}</h3>
    </>)
}

export default EffectHook