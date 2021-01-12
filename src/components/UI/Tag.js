import React from 'react';
import Chip from '@material-ui/core/Chip';
import ClearIcon from '@material-ui/icons/Clear';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		marginRight: '0.8rem',
		marginBottom: '0.8rem',
		height: '2.4rem',
		padding: '0.5rem',
		color: 'var(--primary)',
		borderRadius: '0.5rem'
	},
	deleteIcon: {
		width: '1rem'
	}
});

function Tag({children, handleDelete, handleClick, style, ...custom}) {
	const classes = useStyles();

	return (
		<Chip
			style={style}
			className={classes.root}
			label={children}
			color='secondary'
			onClick={handleClick && handleClick}
			onDelete={handleDelete && handleDelete}
			deleteIcon={
				<ClearIcon className={classes.deleteIcon} {...custom} />
			}
		/>
	);
}

export default Tag;
