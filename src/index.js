import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DevNameCard from './components/DevNameCard.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DevNameCard />, document.getElementById('root'));
registerServiceWorker();
