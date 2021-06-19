import React from 'react'
import { 
  makeStyles, Table, TableContainer,
  Paper, TableHead, TableRow, TableCell, TableBody,
  Typography,
  Divider
} from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    padding: '20px'
  },
  table: {
    minWidth: 650,
    width: '100%'
  },
  title: {
    padding: '10px 20px',
  },
  tableRow: {
    "&:hover": {
      cursor: 'pointer'
    }
  }
})

function createData(name, phoneNumber) {
  return { name, phoneNumber }
}

const rows = [
  createData( 'Joen Doe', '67833227801'),
  createData( 'Max Dive', '1234567890'),

]


export default function CustomersTable(){
  const classes = useStyles();


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
              <TableCell>Name</TableCell>
              <TableCell>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                hover 
                key={row.name}
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