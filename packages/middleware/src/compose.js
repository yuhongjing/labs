function compose(...funs) {
  return funs.reduce((a, b) => {
    return function (...args) {
      return a(b(...args));
    }
  });
}

export default compose;