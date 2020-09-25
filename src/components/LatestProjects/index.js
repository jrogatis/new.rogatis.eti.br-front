import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Slide } from '@material-ui/core';
import ProjectCard from 'components/ProjectCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LastestTitle from './LatestTitle';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '1%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
}));

const LatestProjects = ({ frontProjectsItems }) => {
  const [onLoad, setOnLoad] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => setOnLoad(true), 1300);
    return () => clearTimeout(timer);
  }, []);
  const toColumn = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Slide in={onLoad} direction="up">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <LastestTitle />
        <Grid
          container
          direction={toColumn ? 'column' : 'row'}
          justify="space-around"
          alignItems="center"
          className={classes.root}
          spacing={2}
        >
          {frontProjectsItems.length > 0 &&
            frontProjectsItems.map(item => (
              <Grid item xs={toColumn ? 12 : 4} key={item.id}>
                <ProjectCard project={item} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Slide>
  );
};

export default LatestProjects;
