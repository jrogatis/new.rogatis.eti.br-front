import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Grid, makeStyles, Hidden, Collapse } from '@material-ui/core';
import { history } from 'store';
import CenterHeader from './CenterHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  appToolbar: {
    marginBottom: 0,
    maxHeight: 60,
    paddingTop: 0,
  },
}));

const Header = () => {
  const [selectedBtn, setSelectedBtn] = useState('');
  const [onLoad, setOnLoad] = useState(false);
  const classes = useStyles();
  const handleClick = name => {
    setSelectedBtn(name);
    history.push(name);
  };

  useEffect(() => {
    const timer = setTimeout(() => setOnLoad(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Collapse in={onLoad} className={classes.root}>
      <AppBar position="static" className={classes.appToolbar} data-cy="AppBar">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="flex-start">
            <Grid item xs={2}>
              <LeftHeader handleClick={handleClick} />
            </Grid>
            <Hidden smDown>
              <Grid item container justify="space-around" alignItems="center" xs={8}>
                <CenterHeader selectedBtn={selectedBtn} handleClick={handleClick} />
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item xs={4} sm={2}>
                <RightHeader />
              </Grid>
            </Hidden>
          </Grid>
          <Hidden mdUp>
            <BreadCrumb />
          </Hidden>
        </Toolbar>
      </AppBar>
    </Collapse>
  );
};

export default Header;
