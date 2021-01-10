import React from 'react';
import { Grid, Typography, Chip, makeStyles } from '@material-ui/core';

const JobOverviewStyle = makeStyles(theme => ({
	image: {
		[theme.breakpoints.down('sm')]: {
			width: '4rem',
			marginTop: '-1.5rem'
		}
	},
	imageGrid: {
		[theme.breakpoints.down('sm')]: {
			padding: '0 20px !important'
		}
	},

}));

function JobOverview({
	companyLogo,
	company,
	role,
	contract,
	isFeatured,
	postTime,
	location
}) {
	const classes = JobOverviewStyle();
	return (
		<Grid container spacing={5}>
			<Grid item md={2} className={classes.imageGrid}>
				<img src={companyLogo} alt={company} className={classes.image} />
			</Grid>
			<Grid item md={6}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '0.3rem'
					}}>
					<Typography
						variant='subtitle1'
						color='primary'
						style={{fontSize: '0.8rem'}}>
						{company} &nbsp;&nbsp;
					</Typography>
					<Chip
						label='NEW!'
						color='primary'
						size='small'
						style={{
							fontSize: '0.6rem',
							fontWeight: 'bold',
							color: 'white',
							lineHeight: '2'
						}}
					/>
					{isFeatured && (
						<>
							&nbsp;
							<Chip
								label='FEATURED'
								size='small'
								style={{
									backgroundColor: '#2C3A3A',
									fontSize: '0.6rem',
									fontWeight: 'bold',
									color: 'white',
									lineHeight: '2'
								}}
							/>
						</>
					)}
				</div>
				<Typography variant='subtitle1'>
					{role}
				</Typography>
				<Typography
					variant='body1'
					style={{
						fontSize: '0.8rem',
						fontWeight: '500',
						lineHeight: '2'
					}}>
					{postTime} &nbsp; • &nbsp; {contract} &nbsp; • &nbsp;
					{location}
				</Typography>
			</Grid>
		</Grid>
	);
}

export default JobOverview;
