import * as constants from './constants';
import endpoints, { api } from './endpoints';

const url = () => endpoints.projects();
const fetchProjects = async () => {
  try {
    return api.get({
      url: url(),
    });
  } catch (err) {
    throw new Error(err);
  }
};

const ProjectsRequest = () => ({
  type: constants.PROJECTS_REQUEST,
});

const projectsFullFilled = payload => ({
  type: constants.PROJECTS_FULLFILLED,
  payload: payload.data,
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
