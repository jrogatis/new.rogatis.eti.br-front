import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import CenterHeader from './CenterHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

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
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid xs={2}>
            <LeftHeader />
          </Grid>
          <Grid container justify="space-around" alignItems="center" xs={8}>
            <CenterHeader />
          </Grid>
          <Grid xs={2}>
            <RightHeader />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
