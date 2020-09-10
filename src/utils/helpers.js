export const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1);

export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const userIdExtractor = value => /people\/(.*)/.exec(value)[1];
