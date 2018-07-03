import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { App } from 'App';
import './index.css';

const Index = () => (
  <Router basename="/">
    <App />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
