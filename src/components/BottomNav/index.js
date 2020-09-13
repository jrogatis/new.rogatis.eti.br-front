import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { darkGray } from 'theme/colors';
import CenterBottom from './CenterBottom';
import { version } from '../../../package.json';
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'transparent',
    borderTop: '1px solid white',
    color: darkGray,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const date = new Date();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}
      wrap="nowrap"
    >
      <Grid
        item
        xs={3}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid xs={12} item>
          <Typography noWrap>Jean Philip de Rogatis@{date.getFullYear()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <CenterBottom />
      </Grid>
      <Grid item xs={3} container direction="row" justify="flex-end" alignItems="center">
        <Grid item>
          <Typography noWrap>Ver: {version}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomNav;
