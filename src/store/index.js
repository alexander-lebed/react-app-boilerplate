import React from 'react';
import { Theme } from './theme';

const providers = [<Theme.Provider key='theme' />];

const Store = ({children}) => {
    return providers.reduceRight((kids, parent) => React.cloneElement(parent, {children: kids}), children);
};

export { Theme };
export default Store;