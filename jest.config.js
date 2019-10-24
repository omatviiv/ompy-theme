module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^demo(.*)$': '<rootDir>/demo$1',
    '^theme(.*)$': '<rootDir>/theme$1',
  },
  setupFiles: [
    './jestsetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
