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

function createData(name, phoneNumber) {
  return { name, phoneNumber }
}

// const rows = [
//   createData( 'Joen Doe', '67833227801'),
//   createData( 'Max Dive', '1234567890'),

// ]


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
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(rows, row => (
              <TableRow 
                hover 
                key={row.id}
                classes={{ root: classes.tableRow }}
              >
                <TableCell >{row.name}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}