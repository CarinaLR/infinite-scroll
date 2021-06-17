# Infinite-Scroll Implementation (Pinterest)

Challenge #1 - Infinite-Scroll.

`Pinterest` has infinite scroll feature implementation. Given static `JSON` Pinterest Pins, design and implement a page that shows all the `pins` and allows infinite-scroll.

Optional feature, `search-bar` allows the users to search for a specific `topic`, and allows infinite scrolling, reusing the Pins as needed. Reusing the data fetching from `home page` to arrange on the page and support infinite scrolling.

`Loading...` will be displayed at the end of the page, given a certain set of time `10 seconds` to fetch the extra data needed.

This project is base on pinterest's pins data.

Built with `Node.js`/`Express`/`JavaScript`/ `ReactJS` / `React-Hooks`/ `Bootstrap4` / `Start Bootstrap Templates`.

## Setup

```
# views.py -the core of the project structure, connects the app with the database, and all the corresponding paths for each web page.
# urls.py -determines the paths for each view function. Connects the HTTPrequest waiting for a matching response from views.py. Here we define the routes and arguments that we would need in order to fetch the data.
# models.py -gives a perspective of how each table of the database looks like and what data types are referring to.
# templates folder -contains all HTML files.
# static folder -contains ` tandem ` folder which contains the css file with the stylesheet, all images using in the application, javascript file and a `readme` folder which contains the images for the readme file.
# main.js -connects the client-side with the server-side, here all the APIs calls are made to fetch information from the database. The path using in our fetch request has to match with the path on our urls.py to connect with the view function and retrieve information. AJAX calls are also to prevent refresh/ reloading the webpage which makes our app run fast. This file is where gets to work all the functionality of our app to be displayed and interact with the user.

```

## Enviroment

- `python3 -m venv venv` create a virtual python enviroment
- `$ . venv/bin/activate` activates the enviroment
- `git clone` with this repo url to get the code in local machine
- `pip install requirement.txt` to get all dependecies and packages
- `pip install django` to creat superuser and activate database
- `python manage.py makemigrations tandem` create tables and for our db
- `python manage.py migrate` migrate the tables
- `python manage.py runserver` activate localhost

## Home Page.

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-home.png)

## Loading, hook implementing at the end of the page to keep infinite scroll.

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-loading.png)

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-new-loading.png)

## Search-Bar, allows users to search for a specific topic in our data. Sending a query to our api endpoint.

![](/infinite-scroll/public/assets/redmePics/infinite-scroll-search-bar.png)

## Responsive design, with a dropdown menu.

![](/infinite-scroll/public/assets/redmePics/responsive-design-infinite-scroll.png)
