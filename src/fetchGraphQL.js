import http from './http-common';

export default async (query, variables) => {
	const res = await http.post('', JSON.stringify({
		query,
		variables,
	}));

	return res.data;
};
