import React from 'react'

const WithCounter = (OrginalComponent) => {
    class NewComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                click: 0
            }
            this.clickHandler = this.clickHandler.bind(this)
        }

        clickHandler() {
            this.setState({
                click: this.state.click + 1
            })
        }
        render() {
            return <OrginalComponent counter={this.state.click} clickHandler={this.clickHandler} {...this.props} />
        }
    }
    return NewComponent
}

export default WithCounter