import React from 'react';
const css = require('./button.scss');

const Button: React.FunctionComponent = () => {
    return (
        <button className={css.Button}>text</button>
    )
}

export default Button;