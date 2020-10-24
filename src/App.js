import React, { useState, useEffect } from 'react';

import fetchGraphQL from './fetchGraphQL';

export default () => {
	const [state, setState] = useState({ name: '' });

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const response = await fetchGraphQL(`
      query RepositoryNameQuery {
        # feel free to change owner/name here
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
		`);
				if (!isMounted) return;
				setState({ name: response.data.repository.name });
			} catch (e) {
				console.log(e);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, [fetchGraphQL]);

	return (
		<div className='App'>
			{state.name ? `Repository: ${state.name}` : 'Loading'}
		</div>
	);
};
