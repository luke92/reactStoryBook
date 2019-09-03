import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Reducers as GitHubStore } from '../Components/GitHubRepositoryList';
import { Reducers as GitHubDescriptionStore } from '../Components/GitHubRepositoryDescription';
import initializeSagas from './sagasInitializer';

export default function initializeStores() {
	const sagaMiddleware = createSagaMiddleware();
	const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f;
	const rootStore = createStore(
		combineReducers({
			GitHubStore,
			GitHubDescriptionStore,
		}),
		{},
		compose(
			applyMiddleware(sagaMiddleware, logger),
			devTools
		)
	);

	sagaMiddleware.run(initializeSagas);

	return rootStore;
}
