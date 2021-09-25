import React, { useState, useContext } from 'react';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignInValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email address')
	  	.required('Please enter an email address'),
	password: Yup.string()
		.required('Please enter a password')
});

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn({ authContext, authUrl }) {
	const [error, setError] = useState(null)
	const { setToken } = useContext(authContext); 
	const classes = useStyles();

	const initialValues = {
		email: '',
		password: '',
	}

const handleSubmit = (values) => {
	fetch(authUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})
	.then(response => response.json())
	.then(data => {
		setToken(data.accessToken)
	})
	.catch((error) => {
		setError(error)
	});
}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />

			<div className={classes.paper}>
				<Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
				<Typography component="h1" variant="h5">Sign in</Typography>

				<Formik
					initialValues={ initialValues }
					// validationSchema={ SignInValidationSchema }
					onSubmit={ handleSubmit }
				>
					{({ errors, touched, isSubmitting }) => (
						<Form>
							<Field
								label="Email Address"
								name="email"
								type="input"
								variant="outlined"
								margin="normal"
								id="email"
								autoComplete="email"
								autoFocus
								fullWidth
								as={ TextField }
								helperText={ touched.email && errors.email }
								error={ Boolean(touched.email && errors.email) }
							/>

							<Field
								label="Password"
								name="password"
								type="input"
								variant="outlined"
								margin="normal"
								id="password"
								autoComplete="current-password"
								fullWidth
								as={ TextField }
								helperText={ touched.password && errors.password }
								error={ Boolean(touched.password && errors.password) }
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								size="large"
								className={ classes.submit }
								disabled={ isSubmitting }
							>
								Sign In
							</Button>
						</Form>

					)}
				</Formik>
			</div>

		</Container>
	)
  
}