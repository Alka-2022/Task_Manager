# Task Manager

Task Manager is a web application that allows users to manage their tasks and to-do lists. It provides a user-friendly interface for creating, editing, and deleting tasks and marking tasks as completed or incomplete. The backend is built with Django, which provides RESTful API endpoints for task interaction, while the front end is built with React.


## Features

- Create, Read, Update, and Delete tasks.
- Mark tasks as completed or incomplete.
- Filter tasks by completion status (completed/incomplete).
- user-friendly and responsive design.
- Seamless integration of Django and React.

## Getting Started

# Task_Manager


## Cloning the Repository

1. Clone the repository:

    ```bash
    git clone https://github.com/Alka-2022/Task_Manager.git
    ```

2. Move into the directory where you have the project files:

    ```bash
    cd Task_Manager
    ```

3. Backend(Django)

    

        ```bash
        cd backend
        pip install -r requirements.txt
        python manage.py migrate
        python manage.py runserver
        ```

    -   The Django server should now be running at:

        ```bash
        http://localhost:8000
        ```

4. Frontend(React):

        ```bash
        cd frontend
        npm install
        npm start
        ```

   The React development server should now be running at
       `http://localhost:3000`




## Usage

1. Access the web application by opening your browser and navigating to `http://localhost:3000`.

2. Create a new task by clicking the "Add Task" button.

3. Edit or delete tasks using the provided buttons.

4. Mark tasks as completed or incomplete by clicking on them.

## API Endpoints

The backend Django server provides the following API endpoints:

- `GET /api/task/`: Get a list of all tasks.
- `POST /api/task/`: Create a new task.
- `GET /api/task/<task_id>/`: Get details of a specific task.
- `PUT /api/task/<task_id>/`: Update a specific task.
- `DELETE /api/task/<task_id>/`: Delete a specific task.

You can use these endpoints to interact with the task data programmatically.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request with a detailed description of your changes.


