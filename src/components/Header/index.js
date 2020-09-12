import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Grid, makeStyles, Hidden, Collapse } from '@material-ui/core';
import { history } from 'store';
import CenterHeader from './CenterHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 10,
    maxHeight: 62,
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
    <Collapse in={onLoad} style={{ width: '100%' }}>
      <AppBar position="static" className={classes.root} data-cy="AppBar">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
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
          <BreadCrumb />
        </Toolbar>
      </AppBar>
    </Collapse>
  );
};

export default Header;
