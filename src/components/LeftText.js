import React, { useEffect, useState } from 'react';
import { makeStyles, Fade, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 'calc(10% - 9px)',
    bottom: 'calc(38% - 9px)',
    fontSize: '3rem',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(133deg, #000000 0%, #2500f5 80%)',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
      bottom: 'calc(45% - 9px)',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '2.0rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
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
