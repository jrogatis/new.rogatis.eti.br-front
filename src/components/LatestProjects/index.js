import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, Slide } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2%',
  },
  lateralGrids: {
    borderBottom: '1px solid #000000',
    backgroundColor: 'red',
  },
  text: {
    fontWeight: 'bold',
  },
}));

const LatestProjects = () => {
  const [onLoad, setOnLoad] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => setOnLoad(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Slide in={onLoad} direction="up">
      <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={3} className={classes.lateralGrids}></Grid>
        <Grid item xs={4}>
          <Typography align="center" variant="subtitle1" noWrap paragraph className={classes.text}>
            SOME OF MY LATEST WORK
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.lateralGrids}></Grid>
      </Grid>
    </Slide>
  );
};

export default LatestProjects;
