import { combineReducers } from 'redux';
import types from './GitHubRepositoryDescription.types';

const initialRepositoriesDescriptionState = {
	description: {},
};

const getGitHubRepositoriesDescriptionReducer = (
	state = initialRepositoriesDescriptionState,
	action
) => {
	switch (action.type) {
		case types.RECEIVE_GITHUB_DESCRIPTION:
			return {
				...state,
				description: action.payload.description,
			};
		default:
			return state;
	}
};

const reducer = combineReducers({
	repositories: getGitHubRepositoriesDescriptionReducer,
});
export default reducer;
