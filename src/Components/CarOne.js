import React from 'react'

const CarOne=(props)=>{
    const {name,program}=props
    return(<>
        <h2>{name}</h2>
        <h3>{program}</h3>
    </>)
}

export default CarOne