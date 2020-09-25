import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import PrivateRouter from 'router/privateRouter';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav';
import { backgroundGray } from 'theme/colors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor: backgroundGray,
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
      <BottomNav />
    </Grid>
  );
};

export default Main;
