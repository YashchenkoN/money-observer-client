import React from 'react';

const PropsProxy = (Component, newProps) => props => (
    <Component {...props} {...newProps} />
);

export default PropsProxy;
