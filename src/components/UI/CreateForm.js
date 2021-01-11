import React, { Component } from 'react'

import { Box, Grid, Typography, MenuItem, Button } from '@material-ui/core';

import ReduxFormAutocomplete from './formElements/ReduxFormAutocomplete'
import ReduxFormCheckbox from './formElements/ReduxFormCheckbox'
import ReduxFormSelect from './formElements/ReduxFormSelect'
import ReduxFormInput from './formElements/ReduxFormInput'

import FroalaEditor from './editor/FroalaEditor';
import { Form, Field, reduxForm } from 'redux-form';


const validate = values => {
	const errors = {};
	const requiredFields = [
		'companyName',
		'address',
		'overview',
		'level',
		'role',
		'contract',
		'description'
	];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'This Field is Required';
		}
	});
	return errors;
};

const editorConfig = {
	placeholderText: 'Job description here...',
	height: 300,
	fontFamilySelection: true,
	fontFamily: {
		'Spartan, sans-serif': 'Spartan'
	},
	shortcutsEnabled: [
		'show',
		'bold',
		'italic',
		'underline',
		'strikeThrough',
		'indent',
		'outdent',
		'undo',
		'redo',
		'insertImage',
		'createLink'
	]
};

const onSubmit = (values) => {
	alert(values);
}

export class CreateForm extends Component {

	handleChange = () => {

	}

	render() {
		return (
			<div>
				<Form onSubmit={this.props.handleSubmit}>
					<Box py={2}>
						<Typography variant='h5' component='h2'>
							Company Info
						</Typography>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={5}>
								<Field
									name='companyName'
									label='Company Name'
									component={ReduxFormInput}
								/>
							</Grid>
							<Grid item md={1}></Grid>
							<Grid item md={5}>
								<Field
									name='address'
									label='Address'
									component={ReduxFormInput}
								/>
							</Grid>
						</Grid>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={11}>
								<Field
									name='overview'
									label='Overview'
									component={ReduxFormInput}
								/>
							</Grid>
						</Grid>
					</Box>
					<Box py={2}>
						<Typography variant='h5' component='h2'>
							Job Info
						</Typography>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={5}>
								<Field
									name='level'
									label='Level'
									component={ReduxFormSelect}>
									<MenuItem value='Fresher'>Fresher</MenuItem>
									<MenuItem value='Junior'>Junior</MenuItem>
									<MenuItem value='Midweight'>
										Midweight
									</MenuItem>
									<MenuItem value='Senior'>Senior</MenuItem>
								</Field>
							</Grid>
							<Grid item md={1}></Grid>
							<Grid item md={5}>
								<Field
									name='role'
									label='Role'
									component={ReduxFormSelect}>
									<MenuItem value='Frontend Developer'>
										Frontend Developer
									</MenuItem>
									<MenuItem value='Backend Developer'>
										Backend Developer
									</MenuItem>
									<MenuItem value='Fullstack Developer'>
										Fullstack Developer
									</MenuItem>
									<MenuItem value='intern'>Intern</MenuItem>
								</Field>
							</Grid>
						</Grid>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={5}>
								<Field
									name='contract'
									label='Contract'
									component={ReduxFormSelect}>
									<MenuItem value='Full Time'>
										Full Time
									</MenuItem>
									<MenuItem value='Part Time'>
										Part Time
									</MenuItem>
									<MenuItem value='Contract Based'>
										Contract Based
									</MenuItem>
								</Field>
							</Grid>
							<Grid item md={1}></Grid>
							<Grid item md={5}>
								<Field
									name='featured'
									label='Featured'
									component={ReduxFormCheckbox}
								/>
							</Grid>
						</Grid>
					</Box>
					<Box py={2}>
						<Typography variant='h5' component='h2'>
							Job Overview
						</Typography>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={12}>
								<Field
									name='description'
									label='contract'
									config={editorConfig}
									component={FroalaEditor}
								/>
							</Grid>
						</Grid>
					</Box>
					<Box py={2}>
						<Typography variant='h5' component='h2'>
							Languages
						</Typography>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={12}>
								<Field
									name='languages'
									placeholderText='languages'
									options={[
										'Python',
										'Ruby',
										'JavaScript',
										'HTML',
										'CSS'
									]}
									component={ReduxFormAutocomplete}
								/>
							</Grid>
						</Grid>
					</Box>
					<Box py={2}>
						<Typography variant='h5' component='h2'>
							Tools
						</Typography>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={12}>
								<Field
									name='tools'
									placeholderText='tools'
									options={[
										'React', 'Sass', 'Vue', 'Django', 'RoR (Ruby on Rails)'
									]}
									component={ReduxFormAutocomplete}
								/>
							</Grid>
						</Grid>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item md={12}>
								<Button
									type='submit'
									variant='contained'
									color='primary'
									fullWidth>
									CREATE JOB
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Form>
			</div>
		);
	}
}

CreateForm = reduxForm({
	form: 'createJob',
	validate,
	onSubmit,
})(CreateForm);

export default CreateForm
