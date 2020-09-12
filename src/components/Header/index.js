import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { history } from 'store';
import CenterHeader from './CenterHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 10,
  },
}));

const Header = () => {
  const [selectedBtn, setSelectedBtn] = useState('');
  const classes = useStyles();
  const handleClick = name => {
    setSelectedBtn(name);
    history.push(name);
  };

  return (
    <AppBar position="static" className={classes.root} data-cy="AppBar">
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid xs={2}>
            <LeftHeader handleClick={handleClick} />
          </Grid>
          <Grid container justify="space-around" alignItems="center" xs={8}>
            <CenterHeader
              setSelectedBtn={setSelectedBtn}
              selectedBtn={selectedBtn}
              handleClick={handleClick}
            />
          </Grid>
          <Grid xs={2}>
            <RightHeader />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
