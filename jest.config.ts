/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    roots: [
        "<rootDir>"
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.test.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    preset: 'ts-jest/presets/js-with-ts',
    moduleNameMapper: {
        '#/(.*)': '<rootDir>/src/$1',
        "^.+\\.(css|less|scss)$": "babel-jest",
    },
    transform: {
        ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
    },
    setupFiles: [
        "<rootDir>/jest.setup.ts"
    ]
};
