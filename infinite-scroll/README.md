# Infinite-Scroll Implementation (Pinterest)

Challenge #1 - Infinite-Scroll.

`Pinterest` has infinite scroll feature implementation. Given static `JSON` Pinterest Pins, design and implement a page that shows all the `pins` and allows infinite-scroll.

Optional feature, `search-bar` allows the users to search for a specific `topic`, and allows infinite scrolling, reusing the Pins as needed. Reusing the data fetching from `home page` to arrange on the page and support infinite scrolling.

`Loading...` will be displayed at the end of the page, given a certain set of time `10 seconds` to fetch the extra data needed.

This project is base on pinterest's pins data.

Built with `Node.js`/`Express`/`JavaScript`/ `ReactJS` / `React-Hooks`/ `Axios`/`Bootstrap4` / `Start Bootstrap Templates`.

## Setup

```
# server -contains the api folder, and separates the backend from the frontend.
# server.js -the core of the project structure connects the app with the database, configuring our express middleware and parsing our data for each call, providing a port to our localhost.
# index.js -configure the middleware specific to this router.
# pins.js -determines the paths for each API endpoint. Connects the HTTP request fetch the data and send the response in JSON format. Here we define the routes and arguments that we would need to fetch the data.

# infinite-scroll -contains all the frontend modules, here we store all client-side modules, needed to connect to our backend and display it to the DOM.
# src folder -the core of the frontend structure connects and renders our components and hooks.
# Hooks folder -contains useInfScroll and useSearch custom hooks, need it to set state using in our components, in a modular reusing way.
# Layout folder -contains Layout.js, Home.js, and Header.js which are our components used to implement infinite scrolling implementing functional component,s and utilizing react hooks.
# App.js -Wraps the Layout component, which at the same time wraps the Header and Home components allowing them to render in the application.
# public folder -contains ` assets` folder which contains the css file with the stylesheet and templates, all images using in the readme file, javascript file which also supports the template used.

React Hooks allows to break down the logic. Allows to reuse the component, and bringing in that logic to other components, providing stateless components which means, having a functional component.

```

## Enviroment

- `git clone` with this repo url to get the code in local machine
- `npm install` activates the environment and install all dependencies used in our backend
- `cd infinite-scroll` `npx install` to get all dependecies and packages to our frontend, this has to be done in the `infinite-scroll` folder. So make sure to be in the application folder before install the dependecies.
- `npm run start-server` actives our backend to get our JSON data.
- `npm run start` actives our frontend, to be displayed and manipulate our DOM.
- `npm run start-server` & `npm run start` both server and client have to be activated in order to start our application, as our frontend will send Axios requests to our API endpoints in the server.
- `localhost 8080` port that holds our api routes.
- `localhost 3000` port that supports our frontend.

## Home Page.

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-home.png)

## Loading, hook implementing at the end of the page to keep infinite scroll.

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-loading.png)

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-new-loading.png)

## Search-Bar, allows users to search for a specific topic in our data. Sending a query to our api endpoint.

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-search-bar.png)

## Responsive design, with a dropdown menu.

![](/infinite-scroll/public/assets/redmePics/responsive-design-infinite-scroll.png)
