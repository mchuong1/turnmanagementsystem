import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  icon:{
    color: '#fc5c9c',
    fontSize: '3em'
  },
  primary: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    marginTop: '2em'
  },
});


export default function Confirmation(props) {
  const { history } = props;
  const classes = useStyles()

  return (
    <>
      <Container classes={{root: classes.root}}>
        <Typography variant="h3">Confirmed</Typography>
        <CheckCircleOutlineIcon classes={{root: classes.icon}}/>
        <Typography>Thank you !</Typography>
        <Button
          className={classes.primary}
          variant="contained"
          onClick={() => history.push('/')}
        >
          Start Over
        </Button>
      </Container>
    </>
  )
}

Confirmation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}