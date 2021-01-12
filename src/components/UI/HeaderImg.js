import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'absolute',
		zIndex: '-1',
		top: '0'
	}
});

function HeaderImg({image, style}) {
	const classes = useStyles();
	return (
		<img
			style={style && style}
			src={image.mobile}
			srcSet={`${image.mobile} 400w, ${image.desktop} 1280w`}
			className={classes.root}
			alt=''
		/>
	);
}

export default HeaderImg;
