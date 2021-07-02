import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageSubHeader from '../../../components/PageSubHeader';
import EmployeesTable from './EmployeesTable';

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

export default function Employees() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <PageSubHeader title="Employees" classes={{root: classes.header, title: classes.title}}/>
      <div className={classes.body}>
        <EmployeesTable />
      </div>
    </div>
  )
}