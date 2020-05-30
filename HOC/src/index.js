import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
// import reduxThunk from 'redux-thunk';

// Font Awesome:
// npm install --save-dev @fortawesome/fontawesome-free     //https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
// import '@fortawesome/fontawesome-free/css/all.min.css';  //how to use: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
// https://fontawesome.com/icons?d=gallery&m=free     -> choose from menu on the left -> click any icon image -> click 'Start using this icon'


//
// const composeEnhancers =
// 	process.env.NODE_ENV === 'development'
// 		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// 		: compose;

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Route path='/' component={App} />
		</BrowserRouter>
	</Root>,
	document.getElementById('root')
);
