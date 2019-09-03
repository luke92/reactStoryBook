import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Utils from '../lib/Utils';

const ProtectedRoute = ({
    path,
    component: Component,
    permission,
    render,
    ...rest
}) => {
    // TODO
    // var session = getSission();
    return (
        <Route
            {...rest}
            render={props => {
                if (false /* || !session.userId */)
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location },
                            }}
                        />
                    );

                if (permission && !Utils.isGranted(permission)) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/exception?type=401',
                                state: { from: props.location },
                            }}
                        />
                    );
                }

                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;
