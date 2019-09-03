import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Exception.style.css';

class Exception extends React.Component {
	render() {
		const exception = [
			{
				errorCode: '404',
				errorImg: '../../Images/404.png',
				errorDescription:
					'Sorry, the page you visited does not exist',
			},
			{
				errorCode: '401',
				errorImg: '../../Images/401.png',
				errorDescription:
					'Sorry, you dont have access to this page',
			},
			{
				errorCode: '500',
				errorImg: '../../Images/500.png',
				errorDescription:
					'Sorry, the server is reporting an error',
			},
		];

		const { location } = this.props;
		const params = new URLSearchParams(location.search);
		// const test = params.get('type');
		const { test } = params;
		let error = exception.find((x) => x.errorCode === test);

		if (error == null) {
			[error] = exception;
		}

		return (
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Avatar
						shape="square"
						className="errorAvatar"
						src={error.errorImg}
					/>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={12}>
						<h1 className="errorTitle">
							{error.errorCode}
						</h1>
					</Grid>
					<Grid item xs={12}>
						<h5 className="errorDescription">
							{' '}
							{error.errorDescription}
						</h5>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							color="primary">
							<Link
								to={{
									pathname:
										'/',
								}}>
								Back to Home
							</Link>
						</Button>
					</Grid>
				</Grid>
				<Grid />
			</Grid>
		);
	}
}

export default Exception;
