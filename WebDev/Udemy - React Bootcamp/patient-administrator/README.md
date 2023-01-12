# Patient Administrator

## Creating our first project

First, we have to create a new project using [npm](https://www.npmjs.com/). We will select the name and the framework we want to use. In this case will be [React](https://reactjs.org/) *(JavaScript)*.
```js
$ npm init vite@latest
Need to install the following packages:
  create-vite@4.0.0
Ok to proceed? (y) y
✔ Project name: … patient-administrator
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Done. Now run:

  cd patient-administrator
  npm install
  npm run dev
```

## Tailwind CSS

Install it using the [official documentation](https://tailwindcss.com/docs/guides/vite).

```js
$ npm install -D tailwindcss postcss autoprefixer

added 56 packages, and audited 139 packages in 14s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.cjs
Created PostCSS config file: postcss.config.cjs
```