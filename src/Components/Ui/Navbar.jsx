import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const {user: {name}} = useContext(AuthContext);
    const history = useHistory();

    const {dispatch} = useContext(AuthContext)

    const handleLogout = () => {
        const logoutAction = {
            logged: false
        }

        const action = {
            type: types.logout,
            payload: logoutAction
        }

        dispatch(action)

        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        {name}
                    </span>

                    <button
                        className="nav-item nav-link btn btn-warning" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}