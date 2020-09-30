import React from 'react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import styles from 'static/jss/material-dashboard-pro-react/views/dashboardStyle.js';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  ...styles,
  link: {
    textDecoration: 'initial',
    '&:visited': {
      textDecoration: 'initial',
    },
  },
  card: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'translate3d(0, -30px, 0)',
      transition: 'all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)',
    },
  },
});

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  const onClick = () => {
    window.location.href = project.siteUrl;
  };
  return (
    <a href={project.siteUrl} className={classes.link}>
      <Card className={classes.card} product onCLick={onClick}>
        <CardHeader image className={classes.cardHeaderHover}>
          <img src={project.imgUrl} alt={project.title} />
        </CardHeader>
        <CardBody>
          <Typography gutterBottom noWrap variant="h5" align="center">
            {project.title}
          </Typography>
          <Typography gutterBottom noWrap variant="subtitle2" align="center">
            {project.desc}
          </Typography>
        </CardBody>
        <CardFooter product>
          <div className={`${classes.stats} ${classes.productStats}`}>{project.type}</div>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
