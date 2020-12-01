import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const addbook = () => {
    const title = prompt("Enter Book title");
    const auther = prompt("Enter Auther name");
    const price = prompt("Enter Price ");
    console.log(title, auther, price);
    fetch("api/add", {
      method: "POST",
      body: JSON.stringify({ title, auther, price }),
    }).catch((error) => {
      console.log("Error", error);
    });
  };

export default function NewAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
        Uos library
          </Typography>
          <Button color="inherit"  onClick={addbook}>ADD BOOKS</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
