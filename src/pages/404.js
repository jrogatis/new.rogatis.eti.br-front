import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import imgBkground from '../static/images/404.jpeg';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${imgBkground})`,
      backgroundPosition: 'bottom center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: '80vh',
    },
  }),
);

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    ></Grid>
  );
};

export default LandingPage;
