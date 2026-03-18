import React from 'react';
import { Switch, HashRouter, Route, BrowserRouter} from 'react-router-dom';
import { routes } from './routes';
import PrivateRoute from './PrivateRoute';

export const Routing = ({children}) => {
	const noAuth = true
	return (
		<HashRouter>
				{/* {authUser ? <>
						<Navbar />
						<div style={{padding : "2%"}}> */}
						<Switch >
							{routes.map(({ path, Component, exact }) => (
								<PrivateRoute
									path={path}
									key={path}
									exact={exact}
									noAuth={noAuth}
									component={Component}
								/>
							))}
							{children}
						</Switch>
						{/* </div>
					</>
					:
					<Login />
				} */}
		</HashRouter>
	);
};
