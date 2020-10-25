import React, { useEffect, Suspense } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay/hooks';

import { AppRepositoryNameQuery } from './gql';

const App = ({ queryReference }) => {
	const data = queryReference && usePreloadedQuery(AppRepositoryNameQuery, queryReference);
	return <div className='App'>
		{data?.repository.name}
	</div>;
};

export default () => {
	const [queryReference, loadQuery] = useQueryLoader(AppRepositoryNameQuery);

	useEffect(() => {
		loadQuery({});
	}, []);

	return (
		<Suspense fallback={'Loading...'}>
			<App queryReference={queryReference} />
		</Suspense>
	);
};
