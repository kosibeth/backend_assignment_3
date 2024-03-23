import { findUser } from './db.function.js';

export const authenticate = (request, response, next) => {
  const { username, password } = request.headers;

  const user = findUser(username);

  if (!user || user.password !== password) {
    response.statusCode = 401;
    response.end(JSON.stringify({ error: 'Invalid username or password' }));
    return;
  }
  next(request, response);
};