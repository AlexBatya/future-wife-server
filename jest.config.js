module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/__test__/**/*.test.(js|jsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
