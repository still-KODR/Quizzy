export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    next();
  };
};