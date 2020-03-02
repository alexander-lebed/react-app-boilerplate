import React, { createContext, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContext {
    theme: ThemeMode,
    setTheme: (t: ThemeMode) => void
}

const Context = createContext({} as ThemeContext);

interface Props {
    children?: React.ReactNode
}

const Provider = (props: Props) => {
    const [theme, setTheme] = useState<ThemeMode>('light');
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