// @flow
import React, { createContext, useState } from 'react';

const Context = createContext();

type Props = {
    children: React.Node,
};

const Provider = (props: Props) => {
    const [theme, setTheme] = useState('light');
    return (
        <Context.Provider value={{theme, setTheme}}>
            {props.children}
        </Context.Provider>
    )
};

export const Theme = {
    Context,
    Provider
};