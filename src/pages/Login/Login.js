import { makeStyles } from '@material-ui/core'
import React from 'react'
import LoginButton from './LoginButton'

const useStyles = makeStyles({
  body: {
    height: '100%'
  }
})

export default function Login () {
  const classes = useStyles();
  return (
    <div className={classes.body} data-test="component-login">
      Login
      <LoginButton />
    </div>
  )
}