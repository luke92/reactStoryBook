import { combineReducers } from 'redux';
import types from './GitHubRepositoryList.types';

const initialRepositoriesState = {
	items: [],
};

const getGitHubRepositoriesReducer = (
	state = initialRepositoriesState,
	action
) => {
	switch (action.type) {
		case types.RECEIVE_GITHUB_REPOSITORIES:
			return {
				...state,
				items: action.payload.items,
			};
		default:
			return state;
	}
};

const reducer = combineReducers({
	repositories: getGitHubRepositoriesReducer,
});
export default reducer;
