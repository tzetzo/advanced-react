import React from 'react';

import Header from './Header';
// import StreamList from './streams/StreamList';
// import StreamCreate from './streams/StreamCreate';
// import StreamEdit from './streams/StreamEdit';
// import history from '../history';

const App = ({children}) => {
	return (
		<div>
			<Header />
      {children}
		</div>
	);
};

export default App;
