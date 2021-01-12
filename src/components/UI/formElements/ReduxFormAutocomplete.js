import React, { useState } from 'react';

import {
	TextField,
	FormControl,
	FormHelperText
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Tag from '../Tag';


function ReduxFormAutocomplete({
	input,
	label,
	options,
	placeholderText,
	meta: { touched, error },
	custom
}) {

	const [selectedOption, setSelectedOption] = useState([]);
	const [errorState, setErrorState] = useState(true);

	return (
		<>
			<FormControl fullWidth error={errorState && touched && error}>
				<Autocomplete
					multiple
					onChange={(event, value) => {
						if (value.length === 0) {
							setErrorState(true);
						} else {
							setErrorState(false);
							setSelectedOption(value);
						}
					}}
					options={options}
					getOptionLabel={options.forEach(element => element)}
					filterSelectedOptions
					renderInput={params => (
						<TextField
							{...params}
							variant='outlined'
							label={label && label}
							placeholder={placeholderText}
							error={errorState && touched && error}
						/>
					)}
					renderTags={(value, getTagProps) =>
						value.map((option, index) => (
							<Tag
								style={{marginBottom: '0'}}
								{...getTagProps({index})}>
								{option}
							</Tag>
						))
					}
				/>
				<FormHelperText>
					{errorState && touched && error}
				</FormHelperText>
				<TextField
					{...input}
					{...custom}
					value={selectedOption}
					style={{height: '0', width: '0'}}
				/>
			</FormControl>
		</>
	);
}

export default ReduxFormAutocomplete;
