import React, { useEffect, useState } from 'react';
import { Grid, CardMedia, Slide, makeStyles } from '@material-ui/core';
import RightImage from 'static/images/skyDir.jpg';
import LeftImage from 'static/images/skyEsqV5.jpg';
import LeftText from '../../components/LeftText';
import LatestProjects from 'components/LatestProjects';
import { requestFrontProjectsAction } from 'modules/frontProjects/actions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  grid: {
    position: 'relative',
    left: 0,
    top: 0,
    zIndex: 10,
  },
}));

const LandingPage = () => {
  const dispatch = useDispatch();
  const [onLoad, setOnLoad] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => setOnLoad(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(requestFrontProjectsAction());
  }, [dispatch]);

  return (
    <Grid container direction="column">
      <Grid container direction="row">
        <Grid item xs={6}>
          <Slide in={onLoad} direction="right">
            <div className={classes.grid}>
              <LeftText />
              <CardMedia component="img" height="100%" src={LeftImage} />
            </div>
          </Slide>
        </Grid>
        <Grid item xs={6}>
          <Slide in={onLoad} direction="left">
            <CardMedia component="img" height="100%" src={RightImage} />
          </Slide>
        </Grid>
      </Grid>
      <LatestProjects />
    </Grid>
  );
};

export default LandingPage;
