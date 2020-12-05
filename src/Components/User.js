import React,{Component} from 'react'

class User extends Component{
    constructor() {
        super()
        this.state = {
            click: 1
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            click: this.state.click + 1
        })
    }

    render(){
        return(<>
            <h1>{this.props.render(this.state.click,this.clickHandler)}</h1>
        </>)
    }
}

export default User