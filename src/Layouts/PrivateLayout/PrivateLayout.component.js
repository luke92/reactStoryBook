import * as React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import ProtectedRoute from '../../Router/ProtectedRoute';
import { privateRouters } from '../../Router/router.config';
import Utils from '../../lib/Utils';
import './PrivateLayout.style.css';

class PrivateLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}

	toggle = () => {
		const { collapsed } = this.state;
		this.setState({
			collapsed: !collapsed,
		});
	};

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	};

	render() {
		const {
			// history,
			location: { pathname },
		} = this.props;

		// const { path } = this.props.match;
		// const { collapsed } = this.state;
		const { collapsed } = this.state;
		const layout = (
			<Grid>
				<Grid className="headerContainer">
					<Header
						collapsed={collapsed}
						toggle={this.toggle}
					/>
				</Grid>
				<Grid className="mainContainer">
					<Container>
						<Switch>
							{privateRouters
								.filter(
									(
										item
									) =>
										!item.isLayout
								)
								.map(
									(
										route
									) => (
										<ProtectedRoute
											exact={
												route.exact
											}
											path={
												route.path
											}
											component={
												route.component
											}
											permission={
												route.permission
											}
										/>
									)
								)}

							<Redirect
								from="/"
								to="/"
							/>
						</Switch>
					</Container>
				</Grid>
				<Grid className="footerContainer">
					<Footer />
				</Grid>
			</Grid>
		);
		return (
			<DocumentTitle
				title={`Private - ${Utils.getPageTitle(
					pathname
				)}`}>
				{layout}
			</DocumentTitle>
		);
	}
}

export default PrivateLayout;
