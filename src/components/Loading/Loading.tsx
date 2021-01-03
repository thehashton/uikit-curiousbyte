import React from 'react';
import Icon from '../Icon';
const css = require('./loading.scss');

type LoadingProps = {
    className?: string,
    color?: 'primary'|'secondary'|'body'|'white',
    size?: 'small'|'medium'|'large',
}

const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
    const { color = 'body', size = 'large', className = '' } = props;

    return (
        <Icon iconName={'spinner'} color={color} size={size} 
        className={`${css.loading} ${className}`} />
    )
}

export default Loading;