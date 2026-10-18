// Exercise 8 & 9: Request Logger Middleware using next()
const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] 📡 ${req.method} request to: ${req.originalUrl}`);
  
  // Pass control to the next middleware or route handler
  next();
};

module.exports = loggerMiddleware;
