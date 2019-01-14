import React from 'react'
import {Login} from 'react-admin'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core'

import CustomForm from './LoginForm'
import image from '../assets/images/wallhaven-716116.jpg'

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // background: 'url(https://source.unsplash.com/random/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  card: {
    minWidth: 300,
    marginTop: '6em',
  },
  avatar: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
  },
  hint: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[500],
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    marginTop: '1em',
  },
  actions: {
    padding: '0 1em 1em 1em',
  },
});

const renderInput = ({
                       meta: { touched, error } = {},
                       input: { ...inputProps },
                       ...props
                     }) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

const classes = withStyles(styles)

export default () => <Login backgroundImage={image} loginForm={<CustomForm/>}/>
