# NgPwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Setup

install

- Node: `v8.7.0`
- Yarn globally

run `yarn install`

## Build
run `yarn launch`

1. builds app
1. builds service worker from dist folder
1. concurrently starts local json-db at `http://localhost:3000` & local server at `http://localhost:4200`

## Development

Run these commands in separate terminals to test deactivating the client server and local database independently

> \# shell 1 - build client, generate ServiceWorker, start local server
>
> npm run serve:client

> \# shell 2 - start local database
>
> npm run start:db

# Angular CLI
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
