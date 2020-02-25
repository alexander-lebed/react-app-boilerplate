import React, {useContext} from 'react';
import {Theme} from '../../store';

const Home = () => {
    const {theme} = useContext(Theme.Context);
    return (
        <div>
            Home. Current theme is {theme}
        </div>
    );
};

export default Home;