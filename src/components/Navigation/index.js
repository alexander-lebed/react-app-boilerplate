import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../../store'

const Navigation = () => {
    const {theme, setTheme} = useContext(Theme.Context);
    const themeTo = theme === 'light' ? 'dark' : 'light';
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
            </ul>
            <div className="theme">
                <button onClick={() => setTheme(themeTo)}>
                    Enable {themeTo} mode
                </button>
            </div>
        </nav>
    );
};

export default Navigation;