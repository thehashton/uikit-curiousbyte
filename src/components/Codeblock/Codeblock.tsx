import React from 'react';
const css = require('./codeblock.scss');

type codeblockProps = {
    className?: string,
    children: any,
    style?: 'light'|'dark',
}

const Codeblock: React.FunctionComponent<codeblockProps> = (props: codeblockProps) => {
    const { className = '', children = '', style = 'dark' } = props;

    return (
        <pre className={`${css.container} ${css[style]} ${className}`}>
            <code>
                {children}
            </code>
        </pre>
    )
}

export default Codeblock;