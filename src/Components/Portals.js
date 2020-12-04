import React from 'react'
import ReactDom from 'react-dom'

const Portals=()=>{
    return ReactDom.createPortal(<div>
        <h1>PORTAL</h1>
        </div>, document.getElementById('portal-root') )
}

export default Portals