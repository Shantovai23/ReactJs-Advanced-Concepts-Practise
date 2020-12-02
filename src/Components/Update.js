import React, { Component } from 'react'

class Update extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.value === this.state.value) {
            return false
        } else { return true }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value == 5) {
            alert("Called")
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ value: this.state.value + 1 })
        }, 2000)
    }

    render() {
        console.log('redered');
        return (<><h1> value: {this.state.value}</h1></>)
    }
}

export default Update

