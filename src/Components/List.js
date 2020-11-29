import React from 'react'

const List = () => {

    let lang = ['c', 'c++', 'js', 'react', 'nodejs', 'mongodb', 'material ui']
    return (<>
        {lang.map((data, key) => {
            return <h4 key={key}>{data}</h4>
        })}
    </>)
}

export default List