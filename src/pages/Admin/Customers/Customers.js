import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import PageSubHeader from '../../../components/PageSubHeader';
import CustomersTable from './CustomersTable';
import { downloadCSV } from '../../../service/clientService';

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

export default function Customers() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <PageSubHeader title="Customers" classes={{root: classes.header, title: classes.title}}/>
      <div className={classes.body}>
        <div className={classes.buttonBar}>
          {/* <Button variant="contained">New Customer</Button> */}
          <Button variant="contained" color="primary" onClick={downloadCSV}>Download Csv</Button>
        </div>
        <CustomersTable />
      </div>
    </div>
  )
}