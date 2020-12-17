import React from 'react';
const css = require('./icon.scss');

type IconProps = {
    iconName: string,
    className?: string,
    size?: string,
    color?: string,
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
    const { iconName = 'IE', 
            className = '', 
            size = 'small', 
            color = 'primary', 
    } = props;

    return (
        <i className={`${css.iconComponent} ${css[iconName]} ${className} ${css[size]} ${css[color]}`}></i>
    )
}

export default Icon;