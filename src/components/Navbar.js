import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles';
import { 
  Divider, List,
  Toolbar, ListItem, ListItemIcon,
  ListItemText, IconButton
} from '@material-ui/core';
import MuiDrawer from '@material-ui/core/Drawer';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  gutters: {
    paddingLeft: '24px'
  },
  list: {
    color: 'white',
    backgroundColor: '#0e153a'
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

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return(
    <Drawer variant="permanent" open={open} classes={{root: classes.root, paper: classes.list}}>
      <Toolbar>
        <IconButton
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon style={{color: 'white'}} />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button classes={{gutters: classes.gutters}} onClick={() => console.log('works')}>
          <ListItemIcon>
            <PeopleIcon style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Customers"/>
        </ListItem>
      </List>
    </Drawer>
  )
}