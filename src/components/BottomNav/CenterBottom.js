import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { history } from 'store';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const BottomBtn = ({ value }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={3} onClick={() => history.push(value)}>
      <Typography align="center">{value}</Typography>
    </Grid>
  );
};

const CenterBottom = () => {
  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      wrap="nowrap"
    >
      <BottomBtn value="about" />
      <BottomBtn value="portfolio" />
      <BottomBtn value="blog" />
      <BottomBtn value="contact" />
    </Grid>
  );
};

export default CenterBottom;
