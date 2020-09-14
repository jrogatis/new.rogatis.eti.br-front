import React, { useEffect, useState } from 'react';
import { Grid, CardMedia, Slide } from '@material-ui/core';
import RightImage from 'static/images/skyDir.png';
import LeftImage from 'static/images/skyEsqV5.png';

const LandingPage = () => {
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOnLoad(true), 1300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Grid container direction="row">
      <Grid item xs={6}>
        <Slide in={onLoad} direction="right">
          <CardMedia component="img" height="100%" src={LeftImage} />
        </Slide>
      </Grid>
      <Grid item xs={6}>
        <Slide in={onLoad} direction="left">
          <CardMedia component="img" height="100%" src={RightImage} />
        </Slide>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
