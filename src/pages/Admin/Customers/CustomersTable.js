import React, { useEffect, useState } from 'react'
import { 
  makeStyles, Table, TableContainer,
  Paper, TableHead, TableRow, TableCell, TableBody,
  Typography,
  Divider
} from '@material-ui/core'
import { getClient } from '../../../service/clientService';
import _ from 'lodash'


const useStyles = makeStyles({
  paper: {
    padding: '20px'
  },
  table: {
    minWidth: 650,
    width: '100%',
  },
  title: {
    padding: '10px 20px',
  },
  tableRow: {
    "&:hover": {
      cursor: 'pointer'
    }
  },
  tableHead: {
    fontWeight: 'bold'
  }
})

export default function CustomersTable(){
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const fetchClient = async () => {
    const data = await getClient();
    setRows(data.data);
  };

  useEffect(() => {
    fetchClient();
  }, [])


  return(
    <Paper>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Customers
      </Typography>
      <Divider />
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell classes={{root: classes.tableHead}}>Name</TableCell>
              <TableCell classes={{root: classes.tableHead}}>Number</TableCell>
              <TableCell classes={{root: classes.tableHead}}>Appointment Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(rows, row => (
              <TableRow 
                hover 
                key={row.id}
                classes={{ root: classes.tableRow }}
              >
                <TableCell >{_.get(row, 'name')}</TableCell>
                <TableCell>{_.get(row, 'phoneNumber')}</TableCell>
                <TableCell>{_.get(row, 'appointmentType')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}