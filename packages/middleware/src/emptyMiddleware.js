function emptyMiddleware(next) {
  return function (data) {
    next(data);
  }
}

export default emptyMiddleware;