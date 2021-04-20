export default {
  clearMocks: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  roots: ["<rootDir>"],
  testEnvironment: "node",
  testRegex: "./src/.*\\.(test|spec)?\\.(ts|ts)$",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
