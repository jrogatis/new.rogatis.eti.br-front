import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import PrivateRouter from 'router/privateRouter';
import Header from 'components/Header';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    },
  }),
);

const Main = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={classes.root}
    >
      <Header />
      <PrivateRouter />
    </Grid>
  );
};

export default Main;
