import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import CenterHeader from './CenterHeader';
import LeftHeader from './LeftHeader';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 10,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} data-cy="AppBar">
      <Toolbar>
        <LeftHeader />
        <CenterHeader />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
