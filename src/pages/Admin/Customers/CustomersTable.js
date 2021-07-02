import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { 
  makeStyles, Table, TableContainer,
  Paper, TableHead, TableRow, TableCell, TableBody,
  Typography,
  Divider,
  CircularProgress
} from '@material-ui/core'
import _ from 'lodash'
import { getClient } from '../../../service/clientService';


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
  tableContainer: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100px'
  },
  tableRow: {
    "&:hover": {
      cursor: 'pointer'
    }
  },
  tableHead: {
    fontWeight: 'bold'
  },
})

export default function CustomersTable(){
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchClient = async () => {
    setLoading(true)
    const {data} = await getClient();
    setRows(data);
    setLoading(false)
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
      <TableContainer classes={{root: classes.tableContainer}}>
        {isLoading ? <CircularProgress />
        :<Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell classes={{root: classes.tableHead}}>Name</TableCell>
              <TableCell classes={{root: classes.tableHead}}>Number</TableCell>
              <TableCell classes={{root: classes.tableHead}}>Appointment Type</TableCell>
              <TableCell classes={{root: classes.tableHead}}>Check-in Time</TableCell>
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
                <TableCell>{_.get(row, 'phone_number')}</TableCell>
                <TableCell>{_.get(row, 'appointment_type')}</TableCell>
                <TableCell>{moment(_.get(row, 'created_at')).format('MM/DD/YYYY hh:mm:ss A')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        }
      </TableContainer>
    </Paper>
  )
}