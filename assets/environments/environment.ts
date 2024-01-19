// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`

export const environment = {
  production: true,

  // apiUrl: 'http://localhost:8080/',
  // apiUrl_v1: 'http://localhost:8080/kakoo-back-end/api/v1/',

  // apiUrl: 'https://backend.kakoo-software.com/',
  // apiUrl_v1: 'https://backend.kakoo-software.com/api/v1/',

  // Staging = 2
  apiUrl: 'https://web.kakoo-software.com/kakoo-back-end/',
  apiUrl_v1: 'https://web.kakoo-software.com/kakoo-back-end/api/v1/',

  // apiUrl: 'http://157.230.30.255:8080/kakoo-back-end/',
  // apiUrl_v1: 'http://157.230.30.255:8080/kakoo-back-end/api/v1/',

  firebaseConfig: {
    apiKey: 'AIzaSyDCg4LtIUpBuVN8R4GPYNXaDreGi-u1PjM',
    authDomain: 'kakoo-software-staging.firebaseapp.com',
    projectId: 'kakoo-software-staging',
    storageBucket: 'kakoo-software-staging.appspot.com',
    messagingSenderId: '1064112145139',
    appId: '1:1064112145139:web:c21eee73a5889a41da6d86',
    measurementId: 'G-P953THC65C',

    // apiKey: 'AIzaSyBt3Z6opjJ3v346W-4KurL9gPOO21SzXKI',
    // authDomain: 'kakoo-c88f7.firebaseapp.com',
    // projectId: 'kakoo-c88f7',
    // storageBucket: 'kakoo-c88f7.appspot.com',
    // messagingSenderId: '354821935613',
    // appId: '1:354821935613:web:448591d2a9933abd404994',
  },
};
