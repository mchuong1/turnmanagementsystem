import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles';
import { 
  Divider, List,
  Toolbar, ListItem, ListItemIcon,
  ListItemText, IconButton
} from '@material-ui/core';
import MuiDrawer from '@material-ui/core/Drawer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import { useAuth0 } from '@auth0/auth0-react';
import { ChevronLeft, ExitToApp, Person } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  gutters: {
    paddingLeft: '24px',
  },
  list: {
    color: 'white',
    backgroundColor: '#0e153a',
    minWidth: '72px',
  },
  divider: {
    backgroundColor: 'white'
  },
  settingsList: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function Navbar(props) {
  const classes = useStyles();
  const { history } = props;
  const { logout } = useAuth0();
  
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return(
    <Drawer variant="permanent" open={open} classes={{root: classes.root, paper: classes.list}}>
      <Toolbar style={{minHeight: '64px'}} classes={{gutters: classes.gutters}}>
        <IconButton
          edge="start"
          onClick={toggleDrawer}
        >
          {open ? <ChevronLeft style={{color: 'white'}}/> : <MenuIcon style={{color: 'white'}} />}
        </IconButton>
      </Toolbar>
      <Divider classes={{root: classes.divider}}/>
      <List>
      <ListItem button classes={{gutters: classes.gutters}} onClick={() => history.push(`/dashboard/checkedin`)}>
          <ListItemIcon>
            <AssignmentIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Check-ins"/>
        </ListItem>
        <ListItem button classes={{gutters: classes.gutters}} onClick={() => history.push(`/dashboard/customers`)}>
          <ListItemIcon>
            <PeopleIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Customers"/>
        </ListItem>
        <ListItem button classes={{gutters: classes.gutters}} onClick={() => history.push(`/dashboard/employees`)}>
          <ListItemIcon>
            <WorkIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Employees"/>
        </ListItem>
      </List>
      <List classes={{root: classes.settingsList}}>
        <ListItem button classes={{gutters: classes.gutters}} onClick={() => history.push(`/dashboard/profile`)}>
          <ListItemIcon>
            <Person style={{color: 'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Profile"/>
        </ListItem>
        <ListItem button classes={{gutters: classes.gutters}} onClick={() => logout({ returnTo: `${window.location.origin}/login` })}>
          <ListItemIcon>
              <ExitToApp style={{color: 'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Logout"/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withRouter(Navbar)