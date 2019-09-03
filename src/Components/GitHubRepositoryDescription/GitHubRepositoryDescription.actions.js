import types from './GitHubRepositoryDescription.types';

const getGitHubRepositoriesDescription = (url) => ({
	type: types.GITHUB_DESCRIPTION_FETCH,
	payload: { url },
});

const receiveGitHubRepositoriesDescription = (description) => ({
	type: types.RECEIVE_GITHUB_DESCRIPTION,
	payload: { description },
});

const failedFetchGitHubRepositoriesDescription = (error) => ({
	type: types.GITHUB_DESCRIPTION_FETCH_FAILED,
	message: error.message,
});
export {
	getGitHubRepositoriesDescription,
	receiveGitHubRepositoriesDescription,
	failedFetchGitHubRepositoriesDescription,
};
