import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styling/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav id='nav-bar'>
                <div id='container-inside-nav'>
                    <h1>App Name</h1>
                    <div id='nav-links'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/about">About</Link>
                        <Link className='link' to="/users">Users</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
