import React, { useState, useContext } from 'react';
import { object, string } from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World 123");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var SignInValidationSchema = object().shape({
  email: string().email('Please enter a valid email address').required('Please enter an email address'),
  password: string().required('Please enter a password')
});
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
function SignIn(_ref) {
  var authContext = _ref.authContext,
      authUrl = _ref.authUrl;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useContext = useContext(authContext),
      setToken = _useContext.setToken;

  var classes = useStyles();
  var initialValues = {
    email: '',
    password: ''
  };

  var handleSubmit = function handleSubmit(values) {
    setToken("hello");
    fetch(authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setToken(data.accessToken);
    }).catch(function (error) {
      console.error('Error:', error);
    });
  };

  return /*#__PURE__*/React.createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(Avatar, {
    className: classes.avatar
  }, /*#__PURE__*/React.createElement(LockOutlinedIcon, null)), /*#__PURE__*/React.createElement(Typography, {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/React.createElement(Formik, {
    initialValues: initialValues // validationSchema={ SignInValidationSchema }
    ,
    onSubmit: handleSubmit
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Field, {
      label: "Email Address",
      name: "email",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "email",
      autoComplete: "email",
      autoFocus: true,
      fullWidth: true,
      as: TextField,
      helperText: touched.email && errors.email,
      error: Boolean(touched.email && errors.email)
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Password",
      name: "password",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "password",
      autoComplete: "current-password",
      fullWidth: true,
      as: TextField,
      helperText: touched.password && errors.password,
      error: Boolean(touched.password && errors.password)
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      size: "large",
      className: classes.submit,
      disabled: isSubmitting
    }, "Sign In"));
  })));
}

export { HelloWorld, SignIn };
