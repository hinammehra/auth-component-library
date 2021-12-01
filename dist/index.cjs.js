'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Yup = require('yup');
var styles = require('@material-ui/core/styles');
var Container = require('@material-ui/core/Container');
var CssBaseline = require('@material-ui/core/CssBaseline');
var Avatar = require('@material-ui/core/Avatar');
var LockOutlinedIcon = require('@material-ui/icons/LockOutlined');
var Typography = require('@material-ui/core/Typography');
var formik = require('formik');
var TextField = require('@material-ui/core/TextField');
var Button = require('@material-ui/core/Button');
var Grid = require('@material-ui/core/Grid');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var CssBaseline__default = /*#__PURE__*/_interopDefaultLegacy(CssBaseline);
var Avatar__default = /*#__PURE__*/_interopDefaultLegacy(Avatar);
var LockOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(LockOutlinedIcon);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World 123");
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

var SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Please enter an email address'),
  password: Yup.string().required('Please enter a password')
});
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
function SignIn(_ref) {
  var authContext = _ref.authContext,
      authUrl = _ref.authUrl;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useContext = React.useContext(authContext),
      setToken = _useContext.setToken;

  var classes = useStyles();
  var initialValues = {
    email: '',
    password: ''
  };

  var handleSubmit = function handleSubmit(values) {
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
      setError(error);
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(Container__default['default'], {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React__default['default'].createElement(CssBaseline__default['default'], null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React__default['default'].createElement(Avatar__default['default'], {
    className: classes.avatar
  }, /*#__PURE__*/React__default['default'].createElement(LockOutlinedIcon__default['default'], null)), /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/React__default['default'].createElement(formik.Formik, {
    initialValues: initialValues // validationSchema={ SignInValidationSchema }
    ,
    onSubmit: handleSubmit
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/React__default['default'].createElement(formik.Form, null, /*#__PURE__*/React__default['default'].createElement(formik.Field, {
      label: "Email Address",
      name: "email",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "email",
      autoComplete: "email",
      autoFocus: true,
      fullWidth: true,
      as: TextField__default['default'],
      helperText: touched.email && errors.email,
      error: Boolean(touched.email && errors.email)
    }), /*#__PURE__*/React__default['default'].createElement(formik.Field, {
      label: "Password",
      name: "password",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "password",
      autoComplete: "current-password",
      fullWidth: true,
      as: TextField__default['default'],
      helperText: touched.password && errors.password,
      error: Boolean(touched.password && errors.password)
    }), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
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

var useStyles$1 = styles.makeStyles(function (theme) {
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
function Profile(_ref) {
  var profileURL = _ref.profileURL;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      profile = _useState4[0],
      setProfile = _useState4[1];

  var classes = useStyles$1();
  React.useEffect(function () {
    fetch(profileURL).then(function (response) {
      return response.json();
    }).then(function (data) {
      setProfile(data);
    }).catch(function (error) {
      setMessage({
        "message": "Sorry, we encountered an error while getting your profile.",
        "type": "error"
      });
    });
  }, [profileURL]);

  var handleSubmit = function handleSubmit(values) {
    fetch(profileURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setMessage({
        "message": "Profile updated successfully",
        "type": "success"
      });
    }).catch(function (error) {
      setMessage({
        "message": "Sorry, we encountered an error while updating your profile.",
        "type": "error"
      });
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(Container__default['default'], {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React__default['default'].createElement(CssBaseline__default['default'], null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React__default['default'].createElement(Avatar__default['default'], {
    className: classes.avatar
  }, /*#__PURE__*/React__default['default'].createElement(LockOutlinedIcon__default['default'], null)), /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    component: "h1",
    variant: "h5"
  }, "Profile"), /*#__PURE__*/React__default['default'].createElement(formik.Formik, {
    initialValues: profile,
    enableReinitialize: true,
    onSubmit: handleSubmit
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/React__default['default'].createElement(formik.Form, null, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
      item: true,
      xs: 12,
      sm: 6
    }, /*#__PURE__*/React__default['default'].createElement(formik.Field, {
      label: "First Name",
      name: "firstName",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "firstName",
      autoComplete: "firstName",
      autoFocus: true,
      fullWidth: true,
      as: TextField__default['default'],
      helperText: touched.firstName && errors.firstName,
      error: Boolean(touched.firstName && errors.firstName)
    })), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
      item: true,
      xs: 12,
      sm: 6
    }, /*#__PURE__*/React__default['default'].createElement(formik.Field, {
      label: "Last Name",
      name: "lastName",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "lastName",
      autoComplete: "lastName",
      autoFocus: true,
      fullWidth: true,
      as: TextField__default['default'],
      helperText: touched.lastName && errors.lastName,
      error: Boolean(touched.lastName && errors.lastName)
    })), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
      item: true,
      xs: 12,
      sm: 12
    }, /*#__PURE__*/React__default['default'].createElement(formik.Field, {
      label: "Email",
      name: "email",
      type: "input",
      variant: "outlined",
      margin: "normal",
      id: "email",
      autoComplete: "email",
      autoFocus: true,
      fullWidth: true,
      as: TextField__default['default'],
      helperText: touched.email && errors.email,
      error: Boolean(touched.email && errors.email)
    }))), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      size: "large",
      className: classes.submit,
      disabled: isSubmitting
    }, "Save Changes"));
  })));
}

exports.HelloWorld = HelloWorld;
exports.Profile = Profile;
exports.SignIn = SignIn;
