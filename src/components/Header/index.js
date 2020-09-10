import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { history } from 'store';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 10,
  },
}));

const RightMenu = () => {
  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <Button
        data-cy="newSurvivorBtnRoute"
        color="inherit"
        onClick={() => {
          history.push('newsurvivor');
        }}
      >
        New Survivor
      </Button>
      <Button
        data-cy="infectionReportBtnRoute"
        color="inherit"
        onClick={() => history.push('infectionreport')}
      >
        Infection Report
      </Button>
      <Button onClick={() => history.push('locationupdate')} color="inherit">
        Location Update
      </Button>
    </Grid>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} data-cy="AppBar">
      <Toolbar>
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <Typography
            variant="h6"
            className={classes.title}
            noWrap
            onClick={() => history.push('/')}
            data-cy="AppTitle"
          >
            The Resident Zombie
          </Typography>
        </Grid>
        <RightMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
