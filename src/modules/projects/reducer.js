import * as constants from './constants';

const { PROJECTS_REQUEST, PROJECTS_FULLFILLED, PROJECTS_REJECTED } = constants;

const initialState = {
  isLoadingProjects: false,
  errored: false,
};

export default (state = Object.assign({}, initialState), action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECTS_REQUEST:
      return { ...Object.assign({}, initialState), isLoadingProjects: true };

    case PROJECTS_FULLFILLED:
      return {
        ...state,
        isLoadingCurLocation: false,
        projects: payload,
      };
    case PROJECTS_REJECTED:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
