import React from 'react'

// function Hello(){
//     return(
//         <>
//             <h1>Hello React!</h1>
//             <h2>Hello User!</h2>
//         </>
//     )
// }

 const Hello=(props)=>{
    return(
                <>
                    <h1>Hello {props.name} </h1>
                    <h3>{props.children}</h3>
                </>
            )
}
export default Hello