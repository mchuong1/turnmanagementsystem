import React, { useEffect, useState } from 'react'
import { 
  makeStyles, Table, TableContainer,
  Paper, TableHead, TableRow, TableCell, TableBody,
  Typography,
  Divider,
  CircularProgress
} from '@material-ui/core'
import _ from 'lodash'
import { getEmployees } from '../../../service/authService';


const useStyles = makeStyles({
  paper: {
    padding: '20px'
  },
  tableContainer: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100px'
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

export default function EmployeesTable(props){
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true)
    const {data} = await getEmployees();
    setRows(data)
    setLoading(false)
  };

  useEffect(() => {
    fetchEmployees()
  }, [])


  return(
    <Paper>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Employees
      </Typography>
      <Divider />
      <TableContainer classes={{root: classes.tableContainer}}>
        {isLoading ? <CircularProgress />
          :<Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell classes={{root: classes.tableHead}}>Name</TableCell>
                <TableCell classes={{root: classes.tableHead}}>Email</TableCell>
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
                  <TableCell>{_.get(row, 'email')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </TableContainer>
    </Paper>
  )
}