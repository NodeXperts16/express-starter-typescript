# express-starter-typescript
# Overview
Express starter, is a basic application from where a developer can start a new REST service. It showcase basic feature of an API with typescript in express.

# Technology Stack
 * [Node.js](https://nodejs.org) server.
 * [MongoDB](https://docs.mongodb.com/) database.
 * [mongoose](http://mongoosejs.com/) Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box for MongoDB.
 * [TypeScript](https://www.typescriptlang.org/docs/home.html)
 * [Express](https://expressjs.com/) node.js framework for building REST APIs
 * [Jest](https://jestjs.io/docs/en/getting-started) Jest is used to test Javascript frameworks
 * [Supertest](https://www.npmjs.com/package/supertest) provide a high-level abstraction for testing HTTP


# Getting Started - Setup

This section is for getting started with Kue server on your development environment.

1. **Clone the repository**
  ```
  git clone <link>
  ```
2. **Install packages**
  ```
  npm install
  ```

3. **Launch the app in watch mode**
  ```
  npm start
  ```
Now you can expect automatic live reloading whenever you made changes to ```src```

4. **Build the app**

   `npm build`

You can access the api at http://localhost:9000/

# Testing (TODO)
We use unit tests with [Jest](https://github.com/facebook/jest) in this project.

- To run tests

  ```
  npm test
  ```

# Linting
We also use [tslint](https://palantir.github.io/tslint/) with Typescript Standard Style.

- To run lint:

  ```
  npm lint
  ```

- To automatically fix doable linting errors:

  ```
  npm lint:fix
  ```


# Workflow

#### Development Category
For commit message or branch name we will use following categories:
  - feat (feature)
  - fix (bug fix)
  - docs (documentation)
  - style (formatting, missing semi colons, etc)
  - refactor
  - test (when adding missing tests)
  - chore (maintain)

#### Format of Commit Message

```
  <DEVELOPMENT CATEGORY>: <SUBJECT>
  <BLANK LINE>
  <BODY>
  <BLANK LINE>
  <FOOTER>
```

#### BRANCHES

**Git flow** needs to be initialized in order to customize your project setup.

##### Initialize
  ```
  git flow init
  ```

##### Features
Develop new features for upcoming releases.

- Start a new feature:

    ``` git flow feature start MYFEATURE ```

- Finish a feature:

    ``` git flow feature finish MYFEATURE ```

- Publish a feature

    ``` git flow feature publish MYFEATURE ```

- Getting a published feature

    ``` git flow feature pull origin MYFEATURE ```

##### Release
Support preparation of a new production release
Allow for minor bug fixes and preparing meta-data for a release

- Start a new release:

    ``` git flow release start RELEASE ```

- Finish a release:

    ``` git flow release finish RELEASE ```

    **IMP:** Don't forget to do ```git push --tags```

- Publish a release

    ``` git flow release publish RELEASE ```

- Getting a release feature

    ``` git flow release pull origin RELEASE ```


##### Hotfixes
Hotfixes arise from the necessity to act immediately upon an undesired state of a live production version

- Start a new hotfix:

    ``` git flow hotfix start VERSION ```

- Finish a release:

    ``` git flow hotfix finish RELEASE ```




### CI Integration
  - TODO

### Guidelines - must be followed strictly
  - Developer must commit his tasks at the end of the day, even if the task has not been completed
  - Developer must create a pull request at the end of day, even if the task has not been completed, with a SUFFIX in subject name as `[WIP]:` e.g 
  `[WIP]: Setup of Jest with first unit test`

### IDE
Our preferred IDE is `VSCODE`

Please enable following plugins for your editor:
- **EditorConfig:** To enable reading of .editorconfig file for consistent coding convention.
- **SonarLint:** To enable error catch by sonarjs.
- **TSlint:** For linting errors
