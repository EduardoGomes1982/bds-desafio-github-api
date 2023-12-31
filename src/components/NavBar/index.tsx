import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav className='bg-primary main-nav nav-logo-text'>
            <Link to='/'>
                <h4>Github API</h4>
            </Link>
        </nav>
    );
};

export default NavBar;
