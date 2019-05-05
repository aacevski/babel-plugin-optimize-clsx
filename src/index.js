const extractArguments = require('./extractArguments');

module.exports = () => {
  return {
    visitor: {
      CallExpression: path => {
        const { node } = path;
        const { callee: c } = node;
        if (c.type === 'Identifier' && (c.name === 'clsx' || c.name === 'classNames')) {
          try {
            let args = node.arguments;
            args = extractArguments(args);
            node.arguments = args;
          } catch (err) {
            throw path.buildCodeFrameError(err);
          }
        }
      },
    },
  };
};
