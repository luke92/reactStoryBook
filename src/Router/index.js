import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Utils from '../lib/Utils';

const Router = () => {
	const AppLayout = Utils.getRoute('/').component;
	const PrivateLayout = Utils.getRoute('/private').component;

	return (
		<Switch>
			<ProtectedRoute
				path="/private"
				render={(props) => (
					<PrivateLayout {...props} exact />
				)}
			/>
			<Route
				path="/"
				render={(props) => <AppLayout {...props} />}
			/>
		</Switch>
	);
};

export default Router;
