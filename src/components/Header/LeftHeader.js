import React from 'react';
import personalLogo from 'static/images/personalLogo.svg';
import { Grid } from '@material-ui/core';

const LeftHeader = () => {
  return (
    <Grid>
      <img alt="logo JP" src={personalLogo} width={55} height={55} />
    </Grid>
  );
};

export default LeftHeader;
