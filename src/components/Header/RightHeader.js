import React, { useEffect } from 'react';
import { Grid, IconButton, Icon } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';

const RightHeader = () => {
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <Grid container direction="row" justify="flex-end" alignItems="center" wrap="nowrap">
      <Grid item>
        <IconButton>
          <Icon className="fab fa-github-alt" style={{ color: 'white' }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Icon className="fab fa-linkedin" style={{ color: 'white' }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Icon className="fab fa-facebook-square" style={{ color: 'white' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default RightHeader;
