import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const guestLinks = (
        <ul>
            <li><a href="#!">Developers</a></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>
                <Link to="/profiles">
                    Developers
                </Link>
            </li>
        </ul>
    )

    const authLinks = (
        <ul>
            <li>
                <Link to="/register">
                    <i className="fas fa-user"></i>{' '}
                    <span className={'hide-sm'}>Dashboard</span>
                </Link>
                <Link to="/profiles">
                    Developers
                </Link>
                <Link to="/posts">
                    Posts
                </Link>
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className={'hide-sm'}>Logout</span>
                </a>
            </li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to={'/'}>
                    <i className="fas fa-code"></i> DevConnector
                </Link>
            </h1>
            {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
        </nav>
    );
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavBar);
