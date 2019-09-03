import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import StarIcon from '@material-ui/icons/Star';
import ShareIcon from '@material-ui/icons/Share';
import Chip from '@material-ui/core/Chip';
import StarBorder from '@material-ui/icons/StarBorder';
import TocIcon from '@material-ui/icons/Toc';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
	avatar: {
		margin: 10,
	},
	bigAvatar: {
		margin: 10,
		width: 60,
		height: 60,
	},
});

export default function GitHubRepositoryDescriptionContainer(props) {
	const classes = useStyles();
	const { description } = props;
	return (
		<div>
			<Grid item md={12}>
				<h1>{description.name}</h1>
			</Grid>
			<Grid item md={12}>
				<Paper>
					<Typography>holaaaaaaaaaaaa</Typography>
				</Paper>
			</Grid>
			<Grid item md={12}>
				<Chip
					variant="outlined"
					color="primary"
					size="small"
					icon={<StarBorder />}
					//	label={repo.stargazers_count.toLocaleString()}
					label="1222222222"
				/>
				<Chip
					variant="outlined"
					color="primary"
					size="small"
					icon={<ShareIcon />}
					//	label={repo.stargazers_count.toLocaleString()}
					label="1222222222"
				/>
				<Chip
					variant="outlined"
					color="primary"
					size="small"
					icon={<StarBorder />}
					//	label={repo.stargazers_count.toLocaleString()}
					label="1222222222"
				/>
			</Grid>
			<Grid item md={12}>
				<Card>
					<CardContent>
						<Paper>
							<Typography>
								Descripcion:
							</Typography>
							<Typography>
								Cantidad de
								veces compartido
							</Typography>
						</Paper>
					</CardContent>
				</Card>
			</Grid>
			<Grid item md={12}>
				<Avatar
					alt="Remy Sharp"
					src="https://avatars0.githubusercontent.com/u/9892522?v=4"
					className={classes.bigAvatar}
				/>
			</Grid>
		</div>
	);
}
