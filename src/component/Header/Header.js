import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <h3>Cricket Team Maker</h3>
            </div>
            <div className="nav">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Players</a>
                    <a href="#">About</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;