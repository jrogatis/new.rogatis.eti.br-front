import React, { useEffect, useState } from 'react';
import { makeStyles, Fade, useMediaQuery, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: 'calc(65% - 9px)',
    left: 'calc(10% - 9px)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(133deg, #000000 0%, #2500f5 80%)',
    fontWeight: 'bold',
  },
}));

const LeftText = () => {
  const classes = useStyles();
  const [onLoadFade, setOnLoadFade] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setOnLoadFade(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Fade className={classes.root} in={onLoadFade}>
      <Typography variant="h4" align="center" noWrap className={classes.root}>
        Look at the world <br /> from new angles, solving <br />
        &lt;coding&gt; <br />
        problems from an unusual <br /> point of view.
      </Typography>
    </Fade>
  );
};

export default LeftText;
