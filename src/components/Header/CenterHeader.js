import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { white, hoverBlue } from 'theme/colors';
const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    fontSize: '1.3rem',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: white,
      borderColor: white,
      color: hoverBlue,
    },
  },
  divSelected: {
    borderWidth: '1px',
    borderStyle: 'solid',
    maxHeight: '0.6px',
    borderColor: 'transparent',
  },
  selected: {
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    maxHeight: '0.6px',
  },
}));

const CenterHeader = ({ selectedBtn, handleClick }) => {
  const classes = useStyles();

  const renderSelectionBar = value => {
    return (
      <Grid container direction="column">
        {value}
        <div
          className={classNames(
            classes.divSelected,
            selectedBtn === value ? classes.selected : null,
          )}
        />
      </Grid>
    );
  };

  return (
    <Grid
      item
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      xs={9}
      wrap="nowrap"
    >
      <Grid item>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="aboutButton"
          color="inherit"
          onClick={() => handleClick('about')}
        >
          {renderSelectionBar('about')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="portfolioButton"
          color="inherit"
          onClick={() => handleClick('portfolio')}
        >
          {renderSelectionBar('portfolio')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="blogButton"
          onClick={() => handleClick('blog')}
          color="inherit"
        >
          {renderSelectionBar('blog')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="contact Button"
          onClick={() => handleClick('contact')}
          color="inherit"
        >
          {renderSelectionBar('contact')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CenterHeader;
