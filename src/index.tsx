import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

// Enable Webpack HMR. Don't worry about production
// It only leaves very small footprint
if (module.hot) module.hot.accept();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root'),
);
