import compose from './src/compose';
import emptyMiddleware from './src/emptyMiddleware';

class Middleware {
  middlewares = [];

  constructor(middlewares) {
    if (Array.isArray(middlewares)) {
      const validTypeMiddlewares = middlewares.filter((item) => typeof item === 'function');
      if (validTypeMiddlewares.length) {
        this.middlewares = validTypeMiddlewares;
      } else {
        this.middlewares = [emptyMiddleware];
      }
    } else {
      this.middlewares = [emptyMiddleware];
    }
  }

  // register middleware
  use(middleware) {
    const idx = this.middlewares.findIndex((item) => item === middleware);
    if (idx === -1) {
      this.middlewares.push(middleware);
    }
  }

  run(callback, defaultData) {
    if (typeof callback === 'function') {
      return compose(...this.middlewares)(callback)(defaultData);
    }
    throw new Error('callback must be function');
  }
}

export default Middleware;