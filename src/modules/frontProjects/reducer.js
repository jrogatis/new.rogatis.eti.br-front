import * as constants from './constants';

const { FRONT_PROJECTS_REQUEST, FRONT_PROJECTS_FULLFILLED, FRONT_PROJECTS_REJECTED } = constants;

const initialState = {
  isLoadingFrontProjects: false,
  errored: false,
  items: [],
};

export default (state = Object.assign({}, initialState), action) => {
  const { type, payload } = action;
  switch (type) {
    case FRONT_PROJECTS_REQUEST:
      return { ...Object.assign({}, initialState), isLoadingFrontProjects: true };

    case FRONT_PROJECTS_FULLFILLED:
      return {
        ...state,
        isLoadingFrontProjects: false,
        items: payload.data,
      };
    case FRONT_PROJECTS_REJECTED:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
