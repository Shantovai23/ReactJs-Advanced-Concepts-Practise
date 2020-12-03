import React,{Component} from 'react'

const MemoB=({id})=>{
    console.log('MemoB rendered')
    return(<>
        <h1>ID : {id}</h1>
    </>)
}

export default React.memo(MemoB)
// export default MemoB