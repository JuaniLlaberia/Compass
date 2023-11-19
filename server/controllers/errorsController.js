const CustomError = require('../utils/error');

const handleDuplicateField = error =>
  new CustomError(
    `Duplicate field: ${error.keyValue.name}. Please use another value.`
  );

const handleValidationError = error => {
  const errors = Object.values(error.errors).map(el => el.message);

  return new CustomError(`Invalid data. Errors: ${errors.join('. ')}`, 400);
};

const handleDuplicateIdError = error =>
  new CustomError(`Couldn't find ID (${error.value}) in DB.`, 404);

const handleTokenError = () =>
  new CustomError('Invalid token. Log in again', 401);

const handleTokenExpiration = () =>
  new CustomError('Token has expired. Log in again', 401);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let errorObj = { ...err };
  errorObj.message = err.message;
  errorObj.name = err.name;

  if (errorObj.code === 11000) errorObj = handleDuplicateField(errorObj);
  if (errorObj.name === 'CastError')
    errorObj = handleDuplicateIdError(errorObj);
  if (errorObj.name === 'ValidationError')
    errorObj = handleValidationError(errorObj);
  if (errorObj.name === 'JsonWebTokenError') errorObj = handleTokenError();
  if (errorObj.name === 'TokenExpiredError') errorObj = handleTokenExpiration();

  res
    .status(errorObj.statusCode)
    .json({ status: errorObj.status, message: errorObj.message });
};
