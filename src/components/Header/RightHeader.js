import React, { useEffect } from 'react';
import { Grid, IconButton, Icon, makeStyles } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import { white, hoverBlue } from 'theme/colors';
const useStyles = makeStyles(theme => ({
  icon: {
    color: white,
    '&:hover': {
      backgroundColor: white,
      borderColor: white,
      color: hoverBlue,
    },
  },
}));

const RightHeader = () => {
  const classes = useStyles();
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center" wrap="nowrap">
      <Grid item>
        <IconButton className={classes.icon}>
          <Icon className="fab fa-github-alt" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton className={classes.icon}>
          <Icon className="fab fa-linkedin" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton className={classes.icon}>
          <Icon className="fab fa-facebook-square" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default RightHeader;
