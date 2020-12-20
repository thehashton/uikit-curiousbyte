import React from 'react';
import Icon from '../Icon';
const css = require('./loading.scss');

const Loading: React.FunctionComponent = () => {
    return (
        <Icon iconName={'spinner'} className={css.loading} />
    )
}

export default Loading;