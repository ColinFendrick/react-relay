import React from 'react';

import { useGithubContext } from '../hooks';

export default () => {
	const { context } = useGithubContext();

	return (
		<div className='App'>
			{context?.query?.repository?.name}
		</div>
	);
};
