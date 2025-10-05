module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/App.tsx",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/types/**/*.ts",
    "!src/routes/**/*.ts",
    "!src/pages/**/*.tsx",
    "!src/contexts/**/*.tsx",
    "!src/services/**/*.ts",
    "!src/data/**/*.ts",
    "!**/node_modules/**",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
