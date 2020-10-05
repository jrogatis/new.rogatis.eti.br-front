import React, { useEffect } from 'react';
import ProjectCard from 'components/ProjectCard';
import { Grid, GridList, GridListTile, makeStyles, useMediaQuery } from '@material-ui/core';
import { requestProjectsAction } from 'modules/projects/actions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  gridList: {
    padding: 40,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  gridItem: {
    minHeight: 540,
    [theme.breakpoints.up('md')]: {
      minHeight: 400,
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 450,
    },
  },
}));
const Portfolio = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projectsItems = useSelector(state => state.projects.items);
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));
  const numCol = isSmall ? 1 : isMd ? 2 : 3;

  useEffect(() => {
    dispatch(requestProjectsAction());
  }, [dispatch]);

  return (
    <GridList cols={numCol} spacing={20} className={classes.gridList}>
      {projectsItems.length &&
        projectsItems.map(item => {
          return (
            <GridListTile className={classes.gridItem}>
              <ProjectCard project={item} />
            </GridListTile>
          );
        })}
    </GridList>
  );
};

export default Portfolio;
