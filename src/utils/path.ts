// @ts-nocheck
function normalizeArray(parts, allowAboveRoot) {
  let res = [];
  for (let i = 0; i < parts.length; i++) {
    let p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

const Path = {
  resolve: function () {
    let resolvedPath = '',
        resolvedAbsolute = false;

    for (let i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      let path = (i >= 0) ? arguments[i] : process.cwd();

      // Skip empty and invalid entries
      if (typeof path !== 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path[0] === '/';
    }
    resolvedPath = normalizeArray(resolvedPath.split('/'),
        !resolvedAbsolute).join('/');

    return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
  }
};

export default Path;