import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <a href="/about">О сайте</a>
                &nbsp;&nbsp;
                <a href="/posts">Посты</a>
            </div>
        </div>
    );
};

export default Navbar;
