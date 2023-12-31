import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-primary navbar navbar-expand-md navbar-dark main-nav nav-logo-text'>
            <div className='container-lg container-fluid'>
                <Link to='/'>
                    <h4>Carros Top</h4>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#ct-button' aria-controls='ct-button'
                    aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='ct-button' className='collapse navbar-collapse'>
                    <ul className='navbar-nav offset-sm-8 main-menu'>
                        <NavLink to='/' activeClassName='active' exact>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/products' activeClassName='active'>
                            <li>Catálogo</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
