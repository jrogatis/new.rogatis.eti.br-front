import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { white, hoverBlue } from 'theme/colors';
import SelectedBar from '../SelectedBar';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 0,
    textTransform: 'none',
    fontSize: '1.3rem',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: white,
      borderColor: white,
      color: hoverBlue,
    },
  },
}));

const CenterHeader = ({ selectedBtn, handleClick }) => {
  const classes = useStyles();

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
      <Grid item xs={3}>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="aboutButton"
          color="inherit"
          onClick={() => handleClick('about')}
        >
          <SelectedBar value="about" selectedBtn={selectedBtn} />
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="portfolioButton"
          color="inherit"
          onClick={() => handleClick('portfolio')}
        >
          <SelectedBar value="portfolio" selectedBtn={selectedBtn} />
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="blogButton"
          onClick={() => handleClick('blog')}
          color="inherit"
        >
          <SelectedBar value="blog" selectedBtn={selectedBtn} />
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          fullWidth
          className={classNames(classes.button)}
          data-cy="contact Button"
          onClick={() => handleClick('contact')}
          color="inherit"
        >
          <SelectedBar value="contact" selectedBtn={selectedBtn} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default CenterHeader;
