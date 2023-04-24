import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="px-5 navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to={"/"}>Book Store</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/categories"}>Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                        </ul>
                        <Link className="btn btn-outline-info mx-2" to={"/login"}>Login</Link>
                        <Link className="btn btn-outline-warning" to={"/register"}>Register</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header;