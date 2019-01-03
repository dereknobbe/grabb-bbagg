import React from 'react';
import './Navbar.css';

export class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
            <div className="card">
                <h3>Academics</h3>
            </div>
            <div className="card">
                <h3>Clubs & Extracurriculars</h3>
            </div>
            <div className="card">
                <h3>Purdue Athletics</h3>
            </div>
            <div className="card">
                <h3>Startups & Student Projects</h3>
            </div>
            <div className="card">
                <h3>Health & Living</h3>
            </div>
            </div>
        );
    }
}