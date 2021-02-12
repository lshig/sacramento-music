# sacramento-music

[Sacramento music 1958-2016 :house_with_garden:](https://lizshigetoshi.com/sacramento-music/). This project experiments with visualizing a breakdown of music that references Sacramento, CA USA.

## Basics

- Install [Node.js + npm](https://nodejs.org/en/)
- Clone or fork the repository `https://github.com/lshig/sacramento-music.git`
- Install [nvm](https://github.com/nvm-sh/nvm) and run `nvm use` to run a stable version of Node.js + npm within the project
- Run `npm start` to open development at `http://localhost:9000/`
- Run `npm run serve` and open production at `http://localhost:8080/sacramento-music/`
- Run `npm run build` to build production files to `dist/` folder
- Run `npm run deploy` to deploy production files to `gh-pages` branch on GitHub

## Flavors

- [Babel](https://babeljs.io/)
- [React + JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Dart Sass + SCSS](https://sass-lang.com/dart-sass)
- [Stylelint](https://stylelint.io/)
- [PostCSS](https://postcss.org/)
- [Remark](https://github.com/remarkjs/remark-lint)
- Run `npm run format` to format and write `*.js`, `*.scss`, `*.css`, and `*.md` files with Prettier
- Run `npm run lint` to determine if there are simple errors according to ESLint, Stylelint, and Remark

## Tests

- [PropTypes](https://www.npmjs.com/package/prop-types)
- [Jest](https://facebook.github.io/jest/docs/api.html)
- [Enzyme](http://airbnb.io/enzyme/docs/api/index.html)
- Run `npm test` to run formatting, linting, and Jest tests. Check coverage report in terminal or through the built `coverage/` folder
- Run `npm run test:watch` to run testing and actively watch Jest in the terminal while modifying tests
