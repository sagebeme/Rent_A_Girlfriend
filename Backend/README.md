# Rent a Girlfriend Web Application - Backend

The backend of the Rent a Girlfriend web application handles the server-side logic, database interactions, and API endpoints. This README.md file gives an overview of the backend structure, technologies used, and instructions for setting up and running the application.

## Technologies Used

The backend of the Rent a Girlfriend web application is built using the following technologies:

- Python: Programming language used for server-side development.
- Django: High-level Python web framework for building the backend.
- Django REST framework: A powerful and flexible toolkit for building Web APIs.

## Project Structure

The backend project structure is organized as follows:

## BackEnd

├── rentagirlfriend/
│   ├── clients/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── ...
│   ├── girlfriends/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── ...
│   ├── bookings/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── ...
│   ├── reviews/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── ...
│   ├── config/
│   ├── utils/
│   ├── manage.py
│   └── ...
├── .gitignore
├── requirements.txt
└── README.md


The `rentagirlfriend` directory contains the main application code, organized into Django apps for different resources:

- `clients`: Handles CRUD operations for clients (users who rent girlfriends).
- `girlfriends`: Manages the CRUD operations for girlfriends available for rent.
- `bookings`: Manages the booking process, including creating, retrieving, and updating bookings.
- `reviews`: Handles creating, retrieving, and managing reviews posted by clients for girlfriends.
- `config`: Contains configuration files for the Django project.
- `utils`: Contains utility functions and helper files.
- `manage.py`: The command-line utility for managing the Django project.

## Getting Started

To set up and run the Rent a Girlfriend backend locally using Django, follow these steps:

- Clone the repository (ssh): `git clone git@github.com:sagebeme/Rent_A_Girlfriend.git`

1. Clone the repository: `git clone https://github.com/sagebeme/Rent_A_Girlfriend.git`
2. Install the dependencies: `cd rent-a-girlfriend-backend` and `pip install -r requirements.txt`
3. Set up the database: Configure the database settings in the project's settings file (`rentagirlfriend/config/settings.py`).
4. Apply database migrations: Run `python manage.py migrate` to apply the migrations and create the necessary tables.
5. Start the backend server: Run `python manage.py runserver` to start the Django development server.
6. Verify that the server is running and accessible at the specified port (e.g., `http://localhost:8000`).

Ensure that the backend server is running before attempting to start the frontend application.

## API Documentation

The backend provides various API endpoints to interact with the Rent a Girlfriend application. For detailed information about the available endpoints, request/response formats, and authentication requirements, refer to the API documentation provided separately.



