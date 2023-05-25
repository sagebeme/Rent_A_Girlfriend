# Rent a Girlfriend Web Application - Frontend

The frontend of the Rent a Girlfriend web application provides the user interface for clients to interact with the system, browse available girlfriends, make bookings, and leave reviews. This README.md file gives an overview of the frontend structure, technologies used, and instructions for running the application locally.

## Technologies Used

The frontend of the Rent a Girlfriend web application is built using the following technologies:

- HTML: Markup language for structuring the webpages.
- CSS: Stylesheet language for visually styling the webpages.
- JavaScript: Programming language for adding interactivity and dynamic behavior to the webpages.
- React: JavaScript library for building user interfaces.
- Redux: JavaScript library for managing application state.
- Axios: Promise-based HTTP client for making API requests.

## Project Structure

The frontend project structure follows a typical React application structure:

## FrontEnd

├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Common/
│   │   │   └── ...
│   │   ├── Girlfriend/
│   │   │   └── ...
│   │   ├── Booking/
│   │   │   └── ...
│   │   └── Review/
│   │       └── ...
│   ├── pages/
│   │   ├── Home/
│   │   │   └── ...
│   │   ├── Girlfriends/
│   │   │   └── ...
│   │   ├── Bookings/
│   │   │   └── ...
│   │   └── Reviews/
│   │       └── ...
│   ├── redux/
│   │   ├── actions/
│   │   │   └── ...
│   │   ├── reducers/
│   │   │   └── ...
│   │   └── store.js
│   ├── services/
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md


The `public` directory contains the main `index.html` file and other static assets. The `src` directory contains the application's source code, organized into subdirectories:

- `components`: Contains reusable UI components used throughout the application.
- `pages`: Contains the main pages of the application, such as Home, Girlfriends, Bookings, and Reviews.
- `redux`: Contains the Redux-related files, including actions, reducers, and the Redux store configuration.
- `services`: Contains the API service files responsible for making HTTP requests to the backend server.
- `utils`: Contains utility functions and helper files.
- `App.js`: The entry point of the application where the main routing and component hierarchy are defined.
- `index.js`: The file that renders the root component of the application and mounts it to the DOM.

## Getting Started

To run the Rent a Girlfriend web application locally, follow these steps:

- Clone the repository (ssh): `git clone git@github.com:sagebeme/Rent_A_Girlfriend.git`

1. Clone the repository: `git clone https://github.com/sagebeme/Rent_A_Girlfriend.git`
2. Install the dependencies: `cd rent-a-girlfriend-frontend` and `npm install`
3. Configure the backend API endpoint: In the `src/services/api.js` file, set the `baseURL` to the appropriate URL of the backend server.
4. Start the development server: `npm start`
5. Open a web browser and access the application


