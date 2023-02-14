# AngularBaseSetup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirment For Code Editors

For code editors like Visual Studio Code, Sublime or Webstorm Add below extensions

1. TSLint extension
2. Prettier - Code formatter

tslint.json and .prettierrc are updated for angular project

## Project folder structure and additions

1. Core folder for app core components/services/guards etc
2. Shared folder for directives, pipes etc
3. Config folder contains global configs
4. Enviornments are updated for qa, uat and prod ...
5. Interceptos and guards are added (Update based on project requirments)
6. Pre commit and Pre push hooks are added using husky and lint staged
7. All styles can be added to scss folder

## Contribution Guid

Please follow contribution guid - [Contribution Guid](https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md)

## Take Build

`"npm run build:qa", "npm run build:uat", "npm run build:production"`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
