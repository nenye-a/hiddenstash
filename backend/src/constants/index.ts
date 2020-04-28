require('dotenv').config();

//SERVER RETURN CODE
export const SERVER_OK = 200;
export const SERVER_BAD_REQUEST = 400;
export const SERVER_UNAUTHORIZED = 401;
export const SERVER_FORBIDDEN = 403;
export const SERVER_NOT_FOUND = 404;
export const SERVER_ERROR = 500;

export const API_PORT = process.env.API_PORT || 4040;

//RESPONSE OBJECT
export const BAD_PATH = {
  success: false,
  message: 'NOT FOUND',
};
export const BAD_REQUEST = {
  success: false,
  message: 'BAD REQUEST',
};

export const RETURN_SERVER_NOT_OK = (e = '') => {
  return {
    success: false,
    data: [],
    message: e,
  };
};
export const API_SECRET = process.env.API_SECRET || '';
export const PASSWORD_SALT_ROUNDS =
  Number(process.env.PASSWORD_SALT_ROUNDS) || 1;
