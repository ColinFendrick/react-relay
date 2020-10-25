import { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';

export default () => {
	const [context, updateContext] = useContext(GithubContext);

	const setContext = name => val =>
		updateContext({ ...context, [name]: val });

	return {
		context,
		setContext
	};
};
