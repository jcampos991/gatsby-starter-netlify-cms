import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logo col-md-4">
                        <Link to="/">
                            <img src="/img/bitmap-copy.png" alt="..."/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;