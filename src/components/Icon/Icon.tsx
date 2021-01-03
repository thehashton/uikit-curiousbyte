import React from 'react';
const css = require('./icon.scss');

type IconProps = {
    iconName: string,
    className?: string,
    size?: 'small'|'medium'|'large',
    color?: 'primary'|'secondary'|'body'|'white',
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
    const { iconName = 'IE', 
            className = '', 
            size = 'small', 
            color = 'primary', 
    } = props;

    return (
        <div 
        className={`
        ${css.iconComponent} 
        ${css[iconName]} 
        ${className} 
        ${css[size]} 
        ${css[color]}`
    }></div>
    )
}

export default Icon;