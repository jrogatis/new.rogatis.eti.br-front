import React, { useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { history } from 'store';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: '110px',
    textTransform: 'none',
    fontSize: '1.3rem',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      color: '#000066',
    },
  },
  buttonSelected: {
    borderBottom: '3px solid white',
  },
}));

const CenterHeader = () => {
  const [selectedBtn, setSelectedBtn] = useState('');
  const classes = useStyles();
  const handleClick = name => {
    setSelectedBtn(name);
    history.push(name);
  };

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <Button
        className={classNames(
          classes.button,
          selectedBtn === 'about' ? classes.buttonSelected : null,
        )}
        data-cy="aboutButton"
        color="inherit"
        onClick={() => handleClick('about')}
      >
        about
      </Button>
      <Button
        className={classNames(
          classes.button,
          selectedBtn === 'portfolio' ? classes.buttonSelected : null,
        )}
        data-cy="portfolioButton"
        color="inherit"
        onClick={() => handleClick('portfolio')}
      >
        portfolio
      </Button>
      <Button
        className={classNames(
          classes.button,
          selectedBtn === 'blog' ? classes.buttonSelected : null,
        )}
        data-cy="blogButton"
        onClick={() => handleClick('blog')}
        color="inherit"
      >
        blog
      </Button>
      <Button
        className={classNames(
          classes.button,
          selectedBtn === 'contact' ? classes.buttonSelected : null,
        )}
        data-cy="contact Button"
        onClick={() => handleClick('contact')}
        color="inherit"
      >
        contact
      </Button>
    </Grid>
  );
};

export default CenterHeader;
