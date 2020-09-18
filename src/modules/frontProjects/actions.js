import * as constants from './constants';
import endpoints, { api } from './endpoints';

const url = () => endpoints.frontProjects();
const fetchFrontProjects = async () => {
  try {
    return api.get({
      url: url(),
    });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const frontProjectsRequest = () => ({
  type: constants.FRONT_PROJECTS_REQUEST,
});

const frontProjectsFullFilled = payload => ({
  type: constants.FRONT_PROJECTS_FULLFILLED,
  payload,
});

const frontProjectsRejected = () => ({
  type: constants.FRONT_PROJECTS_REJECTED,
});

const requestFrontProjectsAction = () => {
  return async dispatch => {
    dispatch(frontProjectsRequest());
    try {
      const frontProjects = await fetchFrontProjects();
      dispatch(frontProjectsFullFilled(frontProjects));
    } catch (err) {
      dispatch(frontProjectsRejected());
    }
  };
};

export { requestFrontProjectsAction };
