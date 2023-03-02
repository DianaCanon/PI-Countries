const config = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "ts"],
  testEnvironment: "node",
  verbose: true,
  automock: false,
  testMatch: ["*/.test.js"],
  collectCoverage: true,
  collectCoverageFrom: ["*/.*.js"],
  modulePathIgnorePatterns: ["<rootDir>/jest.config.js"],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = config;
