import React, { Component } from 'react'
// import Navbar from '../components/Nav';

export default class Layout extends Component {
    state = {
        toggle: true
    }
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}
