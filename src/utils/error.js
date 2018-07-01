// @flow
export const apiErrorHandler = (error: any): string => {
  try {
    if (!error.response) {
      return 'Error: Network Error';
    } else if (error.response.data) {
      const erd = error.response.data;
      if (erd.detail) {
        if (erd.detail === 'Invalid token.') {
          return 'Invalid Token. Please re-login.';
        }
        return String(erd.detail);
      }
      if (erd[0]) return String(erd[0]);
      const key = Object.keys(erd)[0];
      const errorString = String(erd[key][0]);
      if (['non_field_errors', 'detail'].indexOf(key) >= 0) {
        return errorString;
      }
      const errorField = String(key).replace('_', ' ');
      return String(
        errorField.charAt(0).toUpperCase() +
          errorField.substring(1) +
          ': ' +
          errorString
      );
    }
  } catch (error) {
    console.log(error);
  }
  return 'An error has occured';
};
