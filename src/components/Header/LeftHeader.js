import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { white, hoverBlue } from 'theme/colors';
import PersonalLogo from 'static/icons/PersonalLogo';
const useStyles = makeStyles(theme => ({
  logo: {
    fill: white,
    height: 50,
    width: 50,
    '&:hover': {
      fill: hoverBlue,
      backgroundColor: white,
    },
  },
}));

const LeftHeader = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <IconButton style={{ padding: 0 }} onClick={() => handleClick('/')}>
      <PersonalLogo className={classes.logo} />
    </IconButton>
  );
};

export default LeftHeader;
