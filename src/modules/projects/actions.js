import * as constants from './constants';

const fetchProjects = async dispatch => {
  try {
  } catch (error) {
    // Handle error
  }
};

const ProjectsRequest = () => ({
  type: constants.PROJECTS_REQUEST,
});

const projectsFullFilled = payload => ({
  type: constants.PROJECTS_FULLFILLED,
  payload,
});

const projectsRejected = () => ({
  type: constants.PROJECTS_REJECTED,
});

const requestProjectsAction = () => {
  return async dispatch => {
    dispatch(ProjectsRequest());
    try {
      const curLocation = await fetchProjects();
      dispatch(projectsFullFilled(curLocation));
    } catch (err) {
      dispatch(projectsRejected());
    }
  };
};

const setProjectsAction = payload => {
  return async dispatch => {
    dispatch(projectsFullFilled(payload));
  };
};

export { requestProjectsAction, setProjectsAction };
