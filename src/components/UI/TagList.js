import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

import Tag from './Tag';

const TagListStyle = makeStyles(theme => ({
	root: {
		textAlign:'right',
		[theme.breakpoints.down('sm')]: {
			borderTop:' 1px solid #dadada',
			paddingTop: '1.2rem',
			marginTop: '1.2rem',
			textAlign:'left'
		}
	}
}));

function TagList({ tagList, style }) {
	const classes = TagListStyle();

	return (
		<div className={classes.root} style={style && style}>
			{tagList.map(item => (
				<Tag key={item}>{item}</Tag>
			))}
		</div>
	);
}

export default TagList;
