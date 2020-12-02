import React, { Component } from 'react'
import UnmountB from './UnmountB'

class UnmountA extends Component {

    constructor() {
        super()
        this.state = {
            isRemove: false
        }
    }
    render() {
        return (<>
            <h1>Parent</h1>
            {this.state.isRemove && <UnmountB />}
            <button onClick={() => { this.setState({ isRemove: !this.state.isRemove }) }}>click</button>
            {console.log(this.state.isRemove)}
        </>)
    }
}

export default UnmountA