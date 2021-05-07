import React, { Component } from 'react'

import moduleName from 'elements/Button'
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onclick: propTypes.func,
}