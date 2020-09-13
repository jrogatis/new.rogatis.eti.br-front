import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, IconButton } from '@material-ui/core';
import { white, hoverBlue } from 'theme/colors';
const useStyles = makeStyles(theme => ({
  icon: {
    color: 'inherit',
  },
  button: {
    color: white,
    '&:hover': {
      backgroundColor: white,
      borderColor: white,
      color: hoverBlue,
    },
  },
}));

const BreadCrumb = () => {
  const classes = useStyles();
  return (
    <div>
      <IconButton className={classes.button}>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default BreadCrumb;
