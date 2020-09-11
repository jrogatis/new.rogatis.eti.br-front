import React, { useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { history } from 'store';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    fontSize: '1.3rem',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      color: '#064A99',
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

const CenterHeader = () => {
  const [selectedBtn, setSelectedBtn] = useState('');
  const classes = useStyles();
  const handleClick = name => {
    setSelectedBtn(name);
    history.push(name);
  };

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
    <Grid container direction="row" justify="space-around" alignItems="center" xs={9}>
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
