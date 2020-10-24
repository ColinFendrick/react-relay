import http from './http-common';

export default async (text, variables) => {
	const res = await http.post('', JSON.stringify({
		query: text,
		variables,
	}));

	return res.data;
};
