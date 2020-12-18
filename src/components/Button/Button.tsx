import React from 'react';
import Icon from '../Icon';
const css = require('./button.scss');

const Button: React.FunctionComponent = () => {
    return (
        <button className={css.Button}>
            <Icon iconName={'IE'} />
            text
        </button>
    )
}

export default Button;