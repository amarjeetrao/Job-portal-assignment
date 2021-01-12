import React from 'react';

import Typography from '@material-ui/core/Typography';
import {Box, Grid} from '@material-ui/core';

import BackButton from './BackButton';

function Header({title}) {
	return (
		<Box py={8}>
			<Grid container>
				<Grid item xs={2}>
					<BackButton />
				</Grid>
				{title && (
					<Grid item xs={10}>
						<Typography variant='h4' component='h1'>
							{title}
						</Typography>
					</Grid>
				)}
			</Grid>
		</Box>
	);
}

export default Header;
