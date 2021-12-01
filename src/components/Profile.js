import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export default function Profile({ profileURL }) {
	const [message, setMessage] = useState(null)
	const [profile, setProfile] = useState({
        firstName: '',
		lastName: '',
		email: '',
	})

    const classes = useStyles();

    useEffect(() => {
        fetch(profileURL)
        .then(response => response.json())
        .then(data => {
            setProfile(data)
        })
        .catch((error) => {
            setMessage({ "message": "Sorry, we encountered an error while getting your profile.", "type": "error"})
        });
    }, [ profileURL ]);

    const handleSubmit = (values) => {
        fetch(profileURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
            setMessage({ "message": "Profile updated successfully", "type": "success"})
        })
        .catch((error) => {
            setMessage({ "message": "Sorry, we encountered an error while updating your profile.", "type": "error"})
        });
    }

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />

			<div className={classes.paper}>
				<Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
				<Typography component="h1" variant="h5">Profile</Typography>

				<Formik
					initialValues={ profile }
                    enableReinitialize
					onSubmit={ handleSubmit }
				>
					{({ errors, touched, isSubmitting }) => (
						<Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        label="First Name"
                                        name="firstName"
                                        type="input"
                                        variant="outlined"
                                        margin="normal"
                                        id="firstName"
                                        autoComplete="firstName"
                                        autoFocus
                                        fullWidth
                                        as={ TextField }
                                        helperText={ touched.firstName && errors.firstName }
                                        error={ Boolean(touched.firstName && errors.firstName) }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        label="Last Name"
                                        name="lastName"
                                        type="input"
                                        variant="outlined"
                                        margin="normal"
                                        id="lastName"
                                        autoComplete="lastName"
                                        autoFocus
                                        fullWidth
                                        as={ TextField }
                                        helperText={ touched.lastName && errors.lastName }
                                        error={ Boolean(touched.lastName && errors.lastName) }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Field
                                        label="Email"
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
                                </Grid>
                            </Grid>

							
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								size="large"
								className={ classes.submit }
								disabled={ isSubmitting }
							>
								Save Changes
							</Button>
						</Form>

					)}
				</Formik>
			</div>

		</Container>
	)
  
}