import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, Try again later",
  };
  // Required value error message
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  //unique value error message
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
  // res.status(defaultError.statusCode).json({ msg: err });
};

// YOU CAN ALSO WRITE THIS BELOW MENTIONED Error-Handler-Middleware FUNCTION

// const errorHandlerMiddleware = (err, req, res, next) => {
//   console.log(err);
//   const defaultError = {
//     statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
//     msg: "Something went wrong, Try again later",
//   };
//   if (err.name === "ValidationError") {
//     defaultError.statusCode = StatusCodes.BAD_REQUEST;
//     defaultError.msg = err.message;
//   }
//   res.status(defaultError.statusCode).json({ msg: defaultError.msg });
// };

export default errorHandlerMiddleware;
