import React from 'react';
import './Header.css';
import {Navbar} from './Navbar.jsx';

export class Header extends React.Component {
    render() {
        return (
            <div>
            <div className="header">
                <h1 >Grab Bag</h1>
                <h3>A Purdue Portal</h3>
            </div>
            <Navbar/>
            </div>
        );
    }
}