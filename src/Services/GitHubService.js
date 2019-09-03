import httpClient from '../lib/httpClient';

const getRepositoriesList = async () => {
	const res = await httpClient.get(
		'https://api.github.com/search/repositories?q=stars:%3E=10000&sort=stars&order=desc'
	);
	return res.data.items;
};

const getRepositoriesDescription = async (url) => {
	const res = await httpClient.get(url);
	return res.data;
};
export default { getRepositoriesList, getRepositoriesDescription };
