import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageSubHeader from '../../../components/PageSubHeader';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  body: {
    height: '87%',
    padding: '20px',
    overflowY: 'auto',
  },
  buttonBar: {
    display: 'flex',
    marginBottom: '1em'
  },
  header: {
    backgroundColor: '#3d5af1',
    marginTop: '-1px'
  },
  title: {
    color: 'white'
  }
})

export default function Checkedin() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <PageSubHeader title="Checked in" classes={{root: classes.header, title: classes.title}}/>
      <div className={classes.body}>
        <div className={classes.buttonBar}>
        </div>

      </div>
    </div>
  )
}