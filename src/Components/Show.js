import React, { Component } from 'react'

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            university: "",
            bio1: "",
            bio2: ""
        }
    }
    show = (e) => {
        e.preventDefault()
        this.setState({ bio1: this.state.name,bio2:this.state.university })
    }

    changed = (e) => {
        this.setState({ name: e.target.value })
    }
    changed2 = (e) => {
        this.setState({ university: e.target.value })
    }
    hidd = () => {
        document.getElementById('dis').style.display = 'none'
    }
    render() {
        return (<>
            <form onSubmit={this.show}>
                <input type="text" value={this.state.name} onChange={this.changed} />
                <input type="text" value={this.state.university} onChange={this.changed2} />
                <h3>{this.state.bio1}</h3>
                <h3>{this.state.bio2}</h3>
                <button onClick={this.hidd} id="dis">Submit</button>
            </form>
        </>)
    }
}

export default Show