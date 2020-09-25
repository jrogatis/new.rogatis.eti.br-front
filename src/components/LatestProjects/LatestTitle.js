import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '1%',
  },
  lateralGrids: {
    borderBottom: '1px solid #000000',
  },
  text: {
    fontWeight: 'bold',
  },
}));

const LatestTitle = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={3} className={classes.lateralGrids}></Grid>
      <Grid item xs={4}>
        <Typography align="center" variant="subtitle1" noWrap className={classes.text}>
          SOME OF MY LATEST WORK
        </Typography>
      </Grid>
      <Grid item xs={3} className={classes.lateralGrids}></Grid>
    </Grid>
  );
};

export default LatestTitle;
