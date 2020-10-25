import React, { useState, createContext } from 'react';

const GithubContext = createContext([{}, () => {}]);

const GithubProvider = props => {
	const [state, setState] = useState({});

	return (
		<GithubContext.Provider value={[state, setState]}>
			{props.children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
