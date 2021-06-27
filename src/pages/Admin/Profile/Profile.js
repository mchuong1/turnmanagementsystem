import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import PageSubHeader from "../../../components/PageSubHeader";

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

const Profile = () => {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <div className={classes.root}>
      <PageSubHeader title="Profile" classes={{root: classes.header, title: classes.title}}/>
      <div className={classes.body}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;