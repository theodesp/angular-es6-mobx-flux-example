export const isObjectShallowModified = (prev, next) => {
  if (null == prev || null == next || typeof prev !== "object" || typeof next !== "object") {
    return prev !== next;
  }
  const keys = Object.keys(prev);
  if (keys.length !== Object.keys(next).length) {
    return true;
  }
  let key;
  for (let i = keys.length - 1; i >= 0, key = keys[i]; i--) {
    if (next[key] !== prev[key]) {
      return true;
    }
  }
  return false;
};

/**
 * Creates a handler that responds to API requests
 */
export function createApiActionHandler(types) {
  const { _, failure, success } = types;

  return (action, successCallBack, errorCallBack) => {
    switch (action.type) {
      case failure:
        errorCallBack();
        break;

      case success:
        successCallBack();
        break;

      default:
        break;
    }
  };
}