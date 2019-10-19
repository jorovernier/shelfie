import React, { Component } from 'react';
import './Header.css';
import logo from './header_logo.png';

export default class Header extends Component {
    render(){
        return (
            <div className='header'>
                <img src={logo} alt='placeholder'/>
                <div>SHELFIE</div>
            </div>
        )
    }
};