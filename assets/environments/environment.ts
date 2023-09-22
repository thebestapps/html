// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`

export const environment = {
  production: true,

  // apiUrl: 'http://localhost:8080/',
  // apiUrl_v1: 'http://localhost:8080/kakoo-back-end/api/v1/',

  // Production
  // apiUrl: 'https://backend.kakoo-software.com/',
  // apiUrl_v1: 'https://backend.kakoo-software.com/api/v1/',
  // langURL: 'https://backend.kakoo-software.com/',

  // Staging = 2
  apiUrl: 'https://web.kakoo-software.com/kakoo-back-end/',
  apiUrl_v1: 'https://web.kakoo-software.com/kakoo-back-end/api/v1/',
};
