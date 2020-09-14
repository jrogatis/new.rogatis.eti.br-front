import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { white } from 'theme/colors';
const useStyles = makeStyles(theme => ({
  divSelected: {
    borderWidth: '1px',
    borderStyle: 'solid',
    maxHeight: '0.6px',
    borderColor: 'transparent',
  },
  selected: {
    borderColor: white,
    borderWidth: '1px',
    borderStyle: 'solid',
    maxHeight: '0.6px',
  },
}));

const SelectedBar = ({ value, selectedBtn }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      {value}
      <div
        className={classNames(classes.divSelected, { [classes.selected]: selectedBtn === value })}
      />
    </Grid>
  );
};

export default SelectedBar;
