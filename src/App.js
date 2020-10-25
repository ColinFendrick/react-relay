import React, { useEffect, Suspense } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay/hooks';
import { Switch, Route } from 'react-router-dom';

import { useGithubContext } from './hooks';
import { AppRepositoryNameQuery } from './gql';
import { Navbar, Home } from './components';

const App = ({ queryReference }) => {
	let data =  usePreloadedQuery(AppRepositoryNameQuery, queryReference);
	const { setContext } = useGithubContext();

	useEffect(() => setContext('query')(data), [data]);

	return (
		<>
			<Navbar />

			<div className='container mt-3'>
				<Switch>
					<Route exact path='/' component={Home}/>
				</Switch>
			</div>
		</>

	);
};

export default () => {
	const [queryReference, loadQuery] = useQueryLoader(AppRepositoryNameQuery);

	useEffect(() => {
		loadQuery({});
	}, []);

	return (
		<>
			{queryReference !== null && (
				<Suspense fallback={'Loading...'}>
					<App queryReference={queryReference} />
				</Suspense>
			)}
		</>
	);
};
