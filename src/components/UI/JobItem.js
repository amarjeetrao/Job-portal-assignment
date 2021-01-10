import React from 'react'
import { Grid, Card, CardContent, CardActionArea } from '@material-ui/core'

import {Link} from 'react-router-dom'

import JobOverview from './JobOverview'
import TagList from './TagList'

function JobItem({ jobDetails }) {

	return (
		<Link to={'/details/' + jobDetails.company} style={{textDecoration:'none'}}>
			<Card raised style={{marginBottom: '60px'}}>
				<CardActionArea>
					<CardContent
						style={{
							borderLeft: `5px solid ${jobDetails.isFeatured &&
								'#7bb6b6'}`
						}}>
						<Grid container alignItems='center'>
							<Grid item md={6}>
								<JobOverview
									companyLogo={jobDetails.companyLogo}
									company={jobDetails.company}
									level={jobDetails.level}
									role={jobDetails.role}
									postTime={jobDetails.postTime}
									contract={jobDetails.contract}
									location={jobDetails.location}
									isFeatured={
										jobDetails.isFeatured &&
										jobDetails.isFeatured
									}
								/>
							</Grid>
							<Grid item md={6}>
								<TagList tagList={jobDetails.tagList} />
							</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
}

export default JobItem
