// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  secret: '0123456789abcdef',
  firebase: {
    "apiKey": "AIzaSyDMAUoxqmL4PGd8v5XQeyi6D_BCAkhJPP4",
    "authDomain": "maria-tfg.firebaseapp.com",
    "databaseURL": "https://maria-tfg-default-rtdb.europe-west1.firebasedatabase.app",
    "projectId": "maria-tfg",
    "storageBucket": "maria-tfg.appspot.com",
    "messagingSenderId": "575181844157",
    "appId": "1:575181844157:web:8abe268d37a18f0f0e51d4"
  },
  //backendUrl: 'http://localhost:3000/api',
  backendUrl: 'https://stormy-tundra-67758.herokuapp.com/api'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
