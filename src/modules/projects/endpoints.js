import Apis from 'apis';

export const api = Apis({ baseURL: process.env.REACT_APP_BASE_URL });

export default {
  projects: id => `projects`,
};
