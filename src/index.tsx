import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App: React.FunctionComponent = () => {
    return (
            <h1>Hello World</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))