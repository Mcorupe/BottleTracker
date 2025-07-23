# **BottleTracker**

## Project Description

BottleTracker :baby_bottle: is for anyone that needs to track feedings of infant humans :baby: or animals :smiley_cat:.
Users may signup and login to their account, select which baby they are feeding, select what type of food (formula or milk), and what amount (ounces).
All data is tracked in Firebase and displayed and filtered for the user. This was inspired by parents alternating waking up in the middle of the night to feed newborns, to help them track feedings.

## Team Members

- Kevin Griego
- Mark Corupe

### Technologies Used

| Library                               | Docs                                                     | Purpose                                                                                          |
| ------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| React                                 | https://reactjs.org/                                     | Javascript framework for single-page application                                                 |
| Gatsby                                | https://www.gatsbyjs.org/docs/                           | Used to build static sites, it makes use of the technologies including ReactJS, Webpack, GraphQL |
| Firebase                              | https://firebase.google.com/docs/firestore               | Flexible, scalable database for mobile, web, and server development from Firebase                |
| testing-library/react-testing-library | https://github.com/testing-library/react-testing-library | Testing framework for unit tests                                                                 |

### Software used

- VS Code
- NodeJS

### Steps to setup environment


```
git clone https://github.com/Mcorupe/BottleTracker.git
npm install
npm start
```

- A Google Cloud account with a firebase project setup
- Create .env
    - Add the following variables from your firebase project:
        ```
        GATSBY_FIREBASE_API_KEY=XXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXX
        GATSBY_FIREBASE_AUTH_DOMAIN=example-app.firebaseapp.com
        GATSBY_FIREBASE_DATABASE_URL=https://example-app.firebaseio.com
        GATSBY_FIREBASE_PROJECT_ID=example-app
        GATSBY_FIREBASE_STORAGE_BUCKET=example-app.firebasestorage.app
        GATSBY_FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
        GATSBY_FIREBASE_APP_ID=1:XXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXX
        GATSBY_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
        ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm start:cache`

Clears the `node_modules`, `.cache` and `public` before running the app in the development mode. <br> Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm run build`

Builds the app in production mode and stores the files in the folder `public`.

### `npm run develop`

Runs the app in the development mode.<br>Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm run serve`

Not sure what this one does - Kevin.

### `npm run analyze`

Runs eslint on the project directory and then prettier. If eslint fails, prettier will not run.

### `npm run fix`

Runs eslint on the project directory and then prettier. If eslint fails, prettier will not run.

### `npm run analyze:lint`

Runs eslint on the project directory.

### `npm run test`

Runs any units tests in the console.

### `npm run test:watch`

Runs any units tests in watch mode in the console.

### `npm run test:watch`

Runs any units tests in and reports the coverage on those files.

### `npm run reinstall`

Clears the cache from the project directory, removes node_modules and node cache and reinstalls and node dependencies.
