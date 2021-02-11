### Project description

Application was created with [Create React App](https://github.com/facebook/create-react-app) for educational puproses.
<br />
It is simple memory game styled with [styled-components](https://styled-components.com/).
<br />

### Demo

[Visualisation of the website](https://focused-tesla-4d3819.netlify.app/)

### Application features

Memory game match description:

- player starts game by pressing start button (that activates possibility to click on cards)
- player has 5 seconds to memorise card after that time cards are beeing flipped face down
- player can uncover two cards at the time (flipping third card is blocked)
- script compares picked cards --> in case of match card are beeing hidden otherwise cards are beeing flipped back face down
- match ends when all cards has been matched, goal is to finish game with the lowest amount of moves (moves are beeing disclosed in the top right corner)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
