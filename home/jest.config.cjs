module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Handle JavaScript files with Babel
  },
  testEnvironment: "jsdom", // Required for React testing
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Setup file for jest-dom matchers
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
};
