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
