import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageSubHeader from '../../../components/PageSubHeader';
import CustomersTable from './CustomersTable';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  body: {
    padding: '20px'
  }
})

export default function Customers() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <PageSubHeader title="Customers"/>
      <div className={classes.body}>
        <CustomersTable />
      </div>
    </div>
  )
}