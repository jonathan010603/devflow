module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  passWithNoTests: true,
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
}