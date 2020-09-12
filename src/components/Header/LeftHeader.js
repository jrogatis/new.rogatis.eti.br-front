import React from 'react';
import { Grid, makeStyles, IconButton } from '@material-ui/core';
import { white, hoverBlue } from 'theme/colors';
import PersonalLogo from 'static/icons/PersonalLogo';
const useStyles = makeStyles(theme => ({
  logo: {
    fill: white,
    height: 55,
    width: 55,
    '&:hover': {
      fill: hoverBlue,
      backgroundColor: white,
    },
    root: {
      backgroundColor: white,
      borderColor: white,
    },
  },
}));

const LeftHeader = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Grid>
      <IconButton onClick={() => handleClick('/')}>
        <PersonalLogo className={classes.logo} />
      </IconButton>
    </Grid>
  );
};

export default LeftHeader;
