import { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';

export default () => {
	const [context, setState] = useContext(GithubContext);

	const setContext = name => val => {
		const newContext = { ...context };
		newContext[name] = val;
		setState(newContext);
	};

	return {
		context,
		setContext
	};
};
