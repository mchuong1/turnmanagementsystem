import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Icon, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '80vh'
  },
  icon:{
    color: '#fc5c9c',
    fontSize: '3em'
  }
});


export default function Confirmation() {
  const classes = useStyles()

  return (
    <>
      <Container classes={{root: classes.root}}>
        <Typography variant="h3">Confirmed</Typography>
        <CheckCircleOutlineIcon classes={{root: classes.icon}}/>
        <Typography>You should get a text message shortly with information regarding your appointment!</Typography>
      </Container>
    </>
  )
}