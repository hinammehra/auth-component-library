'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Avatar = require('@material-ui/core/Avatar');
var Button = require('@material-ui/core/Button');
var CssBaseline = require('@material-ui/core/CssBaseline');
var TextField = require('@material-ui/core/TextField');
var FormControlLabel = require('@material-ui/core/FormControlLabel');
var Checkbox = require('@material-ui/core/Checkbox');
var Link = require('@material-ui/core/Link');
var Grid = require('@material-ui/core/Grid');
var Box = require('@material-ui/core/Box');
var LockOutlinedIcon = require('@material-ui/icons/LockOutlined');
var Typography = require('@material-ui/core/Typography');
var styles = require('@material-ui/core/styles');
var Container = require('@material-ui/core/Container');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Avatar__default = /*#__PURE__*/_interopDefaultLegacy(Avatar);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var CssBaseline__default = /*#__PURE__*/_interopDefaultLegacy(CssBaseline);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var FormControlLabel__default = /*#__PURE__*/_interopDefaultLegacy(FormControlLabel);
var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox);
var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var LockOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(LockOutlinedIcon);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World 123");
}

function Copyright() {
  return /*#__PURE__*/React.createElement(Typography__default['default'], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', /*#__PURE__*/React.createElement(Link__default['default'], {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
}

var useStyles = styles.makeStyles(function (theme) {
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
  return /*#__PURE__*/React.createElement(Container__default['default'], {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React.createElement(CssBaseline__default['default'], null), /*#__PURE__*/React.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(Avatar__default['default'], {
    className: classes.avatar
  }, /*#__PURE__*/React.createElement(LockOutlinedIcon__default['default'], null)), /*#__PURE__*/React.createElement(Typography__default['default'], {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/React.createElement("form", {
    className: classes.form,
    noValidate: true
  }, /*#__PURE__*/React.createElement(TextField__default['default'], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true
  }), /*#__PURE__*/React.createElement(TextField__default['default'], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement(FormControlLabel__default['default'], {
    control: /*#__PURE__*/React.createElement(Checkbox__default['default'], {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
  }), /*#__PURE__*/React.createElement(Button__default['default'], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    className: classes.submit,
    color: "primary"
  }, "Sign In"), /*#__PURE__*/React.createElement(Grid__default['default'], {
    container: true
  }, /*#__PURE__*/React.createElement(Grid__default['default'], {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(Link__default['default'], {
    href: "#",
    variant: "body2"
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Grid__default['default'], {
    item: true
  }, /*#__PURE__*/React.createElement(Link__default['default'], {
    href: "#",
    variant: "body2"
  }, "Don't have an account? Sign Up"))))), /*#__PURE__*/React.createElement(Box__default['default'], {
    mt: 8
  }, /*#__PURE__*/React.createElement(Copyright, null)));
}

exports.HelloWorld = HelloWorld;
exports.SignIn = SignIn;
