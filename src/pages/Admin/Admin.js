import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BrowserRouter as Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';

import Navbar from '../../components/Navbar'
import Checkedin from './Checkedin/Checkedin'
import Customers from './Customers/Customers'
import Employees from './Employees/Employees'
import Profile from './Profile/Profile'

const useStyles = makeStyles({
  body: {
    display: 'flex',
    height: '100%'
  }
})

export default function Admin(props) {
  const classes = useStyles()

  let { path } = useRouteMatch();

  return(
    <>
      <div className={classes.body}>
        <Switch>
          <Navbar />
          <Route exact path={path}><Redirect to={`${path}/checkedin`}/></Route>
          <Route path={`${path}/checkedin`} component={Checkedin}/>
          <Route path={`${path}/customers`} component={Customers} />
          <Route path={`${path}/employees`} render={() => <Employees {...props} />} />
          <Route path={`${path}/profile`} component={Profile} />
        </Switch>
      </div>
    </>
  )
}