import React, {Component} from 'react';

import {
	Container,
	Box,
	Grid,
	Typography,
	Button
} from '@material-ui/core';

import Header from '../components/UI/Header';
import HeaderImg from '../components/UI/HeaderImg';
import TagList from '../components/UI/TagList';
import AtGlance from '../components/UI/AtGlance';

class Details extends Component {
	state = {
		loading: false,
		hasErrors: false,
		job: []
	};

	componentDidMount() {
		const urlId = this.props.match.params.id;
		try {
			fetch(`http://localhost:3001/jobs?company=${urlId}`)
				.then(response => response.json())
				.then(data => {
					this.setState({job: data, loading: true});
				});
		} catch (error) {
			this.setState({hasErrors: 'Something went Wrong'});
		}
	}

	renderJobList = ({
		company,
		address,
		overview,
		description,
		logo,
		position,
		role,
		level,
		contract,
		location,
		languages,
		tools
	}) => {
		return (
			<Grid container>
				<Grid item md={12}>
					<img
						style={{
							boxShadow: '0 0 0px 4px white',
							borderRadius: '50%'
						}}
						src={process.env.PUBLIC_URL + logo}
						alt={company}
					/>
					<Box py={3}>
						<Typography variant='h5' component='h1'>
							{company}
						</Typography>
						<br />
						<Typography variant='body2'>{address}</Typography>
					</Box>
				</Grid>
				<Grid item md={12}>
					<Box py={6}>
						<Grid container spacing={3}>
							<Grid item md={4}>
								<AtGlance
									label='Role'
									title={`${role} Developer`}
								/>
							</Grid>
							<Grid item md={4}>
								<AtGlance label='Level' title={level} />
							</Grid>
							<Grid item md={4}>
								<AtGlance
									label='Contract'
									title={`${contract} Employee`}
								/>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item md={12}>
					<Box py={3}>
						<Typography variant='h6' component='h2'>
							Overview
						</Typography>
						<br />
						<Typography variant='body2'>{overview}</Typography>
					</Box>
				</Grid>
				<Grid item md={12}>
					<Box py={3}>
						<Typography variant='h6' component='h2'>
							Job Description
						</Typography>
						<br />
						<Typography variant='body2'>{description}</Typography>
					</Box>
				</Grid>
				{languages.length ? (
					<Grid item md={12}>
						<Box py={3}>
							<Typography variant='h6' component='h2'>
								Programming Languages
							</Typography>
							<br />
							<Typography variant='body2'>
								<TagList
									tagList={languages}
									style={{textAlign: 'left'}}
								/>
							</Typography>
						</Box>
					</Grid>
				) : (
					''
				)}

				{tools.length ? (
					<Grid item md={12}>
						<Box py={3}>
							<Typography variant='h6' component='h2'>
								Tools
							</Typography>
							<br />
							<Typography variant='body2'>
								<TagList
									tagList={tools}
									style={{textAlign: 'left'}}
								/>
							</Typography>
						</Box>
					</Grid>
				) : (
					''
				)}
				<Grid item md={12}>
					<Box pt={4} pb={8}>
						<Button variant='contained' color='primary' fullWidth>
							APPLY NOW
						</Button>
					</Box>
				</Grid>
			</Grid>
		);
	};

	render() {
		return (
			<>
				<HeaderImg
					style={{
						minHeight: '220px',
						maxHeight: '220px',
						objectFit: 'cover'
					}}
					image={{
						desktop:
							process.env.PUBLIC_URL + '/assets/company-bg.jpg',
						mobile:
							process.env.PUBLIC_URL +
							'/assets/company-bg-mobile.jpg'
					}}
				/>
				<Container maxWidth='md'>
					<Header />
					{this.state.loading
						? this.renderJobList(this.state.job[0])
						: 'Job details are loading'}
				</Container>
			</>
		);
	}
}

export default Details;
