## Rick & Morty Characters https://rickmortycharacters.herokuapp.com/

### `ABOUT PROJECT`
This is single page React application that displays list of characters who appear in Rick and Morty animated series. <br/> The data is fetched from rickandmortyapi.com site, please refer API documentation available at https://rickandmortyapi.com/documentation/.
By default landing screen returns all characters list. User can use search option to search any character of his/her choice. The list is displayed in table format and only basic details are shown in table. User has the option to view more details of any character by clicking on `CLICK HERE` option available on each row. Based on character chosen, more details like list of episodes of that particular character is displayed along with his primary and location details.

Character details is shown in a modal view, in this modal view there are also recommended characters displayed who belong to same species. In a single click all details of recommended character details can also been viewed by clicking on character name within recommendation list. Pagination is implemented for recommendation list view also.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`The application is hosted on link https://rickmortycharacters.herokuapp.com/`

## Available Scripts

In the project directory, please run:

### `npm install`

Please run `npm install` to install all the dependencies required to run the application.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Implementation Details
### `React redux`
React redux is used for state management, please refer to store folder within src folder for implementation.

### `Server side pagination`
Pagination is achieved through server side api calls, simple bootstrap UI is used to achieve pagination UI.  

### `API data`
The application is fetching data from API https://rickandmortyapi.com/api/. 

### `Folder structure`
The source folder structure is created in such a way with containers, components, store folders to be easily scalable, understandable and modular.

## Other Details

### `create-react-app`
Application is built from scratch using command `npx create-react-app rickandmortyapp`

### `redux`
Redux is used in this application for managing application state.

### `react-redux and redux-thunk`
React components read data from a Redux store, and dispatch actions to the store to update data.

### `react-bootstap`
- react-bootstap is used as front-end framework for styling and layout.
- Webpage is responsive and supported on different devices. Use chrome `Toogle device toolbar` to view different window layout such as small devices (mobiles and tabs). Application can also be viewed in other device browsers using application URL https://rickmortycharacters.herokuapp.com/.

### `SUPPORTED BROWSERS`
https://topcoinsmarket.herokuapp.com/
Application is best viewed in latest chrome browser, safari and firefox. please refer to `development` section in package.json for supported browsers. <u>Application is not supported in Internet explorer due to latest create react app feature.</u>

## Other Aspects 

### `Testing`
Test cases are included, `JEST and Enzyme` are used to write tests. Total 33 test cases has been covered. Use `npm test` to check test results.


