import React, { createElement } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World 123");
}

function Copyright() {
  return /*#__PURE__*/createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', /*#__PURE__*/createElement(Link, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
}

var useStyles = makeStyles(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
function SignIn() {
  var classes = useStyles();
  return /*#__PURE__*/createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/createElement(CssBaseline, null), /*#__PURE__*/createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/createElement(Avatar, {
    className: classes.avatar
  }, /*#__PURE__*/createElement(LockOutlinedIcon, null)), /*#__PURE__*/createElement(Typography, {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/createElement("form", {
    className: classes.form,
    noValidate: true
  }, /*#__PURE__*/createElement(TextField, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true
  }), /*#__PURE__*/createElement(TextField, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), /*#__PURE__*/createElement(FormControlLabel, {
    control: /*#__PURE__*/createElement(Checkbox, {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
  }), /*#__PURE__*/createElement(Button, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    className: classes.submit,
    color: "primary"
  }, "Sign In"), /*#__PURE__*/createElement(Grid, {
    container: true
  }, /*#__PURE__*/createElement(Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/createElement(Link, {
    href: "#",
    variant: "body2"
  }, "Forgot password?")), /*#__PURE__*/createElement(Grid, {
    item: true
  }, /*#__PURE__*/createElement(Link, {
    href: "#",
    variant: "body2"
  }, "Don't have an account? Sign Up"))))), /*#__PURE__*/createElement(Box, {
    mt: 8
  }, /*#__PURE__*/createElement(Copyright, null)));
}

export { HelloWorld, SignIn };
