import React from 'react'



function Header(){
    return(
        <header>
            <div className="container d-flex">
            <div className="logo">
                 <img src="logo.svg" alt="logo"/>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="www.twitter.com">Home</a></li>
                    <li><a href="www.google.com">About</a></li>
                    <li><a href="www.facebook.com">Contact </a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}


export default Header;