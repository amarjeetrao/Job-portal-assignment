import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Box, Button} from '@material-ui/core';

import { fetchJobList, jobListSelector } from '../store/reducers/JobListReducer';

import {Link} from 'react-router-dom'

import HeaderImg from '../components/UI/HeaderImg';
import JobItem from '../components/UI/JobItem';

function Listing() {

	const dispatch = useDispatch();
	const { jobList, loading, hasErrors } = useSelector(jobListSelector);

	useEffect(() => {
		dispatch(fetchJobList());
	}, [dispatch]);

	const renderJobList = () => {
		if (loading) return <p>Loading Jobs...</p>;
		if (hasErrors) return <p>Cannot display Jobs...</p>;

		return jobList.map(jobs => (
			<JobItem
				key={jobs.id}
				jobDetails={{
					company: jobs.company,
					location: jobs.address,
					companyLogo: `${process.env.PUBLIC_URL} ${jobs.logo}`,
					role: `${jobs.level} ${jobs.role}`,
					isNew: jobs.new,
					isFeatured: jobs.new,
					postTime: jobs.postedAt,
					contract: jobs.contract,
					tagList: [jobs.level, ...jobs.languages, ...jobs.tools]
				}}
			/>
		));
	};

	return (
		<>
			<HeaderImg
				image={{
					desktop:
						process.env.PUBLIC_URL +
						'/assets/bg-header-desktop.svg',
					mobile:
						process.env.PUBLIC_URL + '/assets/bg-header-mobile.svg'
				}}
			/>
			<Container maxWidth='lg'>
				<Box py={25}>
					<Link to='/create' style={{textDecoration:'none'}}>
						<Button variant='contained' color='primary' fullWidth>
							ADD NEW JOB
						</Button>
					</Link>
					<br /> <br />
					<br /> <br />
					{renderJobList()}
				</Box>
			</Container>
		</>
	);
}

export default Listing;
