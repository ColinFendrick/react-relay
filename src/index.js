import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './App.css';

import RelayEnvironment from './RelayEnvironment';

ReactDOM.render(
	<RelayEnvironmentProvider environment={RelayEnvironment}>
		<App />
	</RelayEnvironmentProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
