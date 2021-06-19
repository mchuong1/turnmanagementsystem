import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import Navbar from '../../components/Navbar'
import Customers from './Customers'

const useStyles = makeStyles({
  body: {
    display: 'flex',
    height: '100%'
  }
})

export default function Admin() {
  const classes = useStyles()

  return(
    <>
      <div className={classes.body}>
        <Navbar />
        <Customers />
      </div>
    </>
  )
}