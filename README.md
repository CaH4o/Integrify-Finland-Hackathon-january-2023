# Name of the project: 
Collab - Project Management Software Prototype

Our app helps you manage your work-life balance to reach your personal and work objectives for you, your family and colleagues. Collaboration made easier

[Logo: ](https://files.slack.com/files-pri/T7XMSNG7P-F04LN48LWP9/collab-logo.png) 

## Link to the demo: 
[]() 

## Tech stack: 
- HTML;
- CSS;
- Typescript;
- React with Redux, React Router, Material UI, Axios; 
- REST API;
- ...

## Description:
The project consists of two parts - client (backend) and api (frontend).
Forntend is a server with a website that provides access to user tasks. There are an autorification page, main page, application settings and dashboards. React Router Dom is used for navigation of them. The main page shows the tasks divided into columns (task states). There is a possibility of different manipulation with tasks, such as adding, changing and moving (drag and drop). The data is stored in the global storage using redux. Data manipulation takes place by calling cations through a reducer. Data is loaded using the axios library from the backend server via a REST API. All data is typed and uses appropriate interfaces and types. The style is implemented by using css, scss and Material UI.
Backend is a midlware server that provides the REST API for working with data and connectes to a database (Mongo DB). There is a router for authorization, all passwords are hashed with the addition of a salt. If authorization is successful, the response contains a token that allows you to manipulate user data. Implemented endpoints for GET POST, PUT and DELETE (see them below). There is also data validation.


## Requirement from the hakaton
### Challenge:
Project Management Software Prototype

### Objective: 
To create a prototype for a project management software similar to Jira that allows users to create, assign, and track tasks and projects

### Development Instructions:
* Create a web-based application using a framework of your choice (e.g. React, Angular, Vue).
* Use a database to store information about projects, tasks, and users (e.g. MySQL, MongoDB).
* Create a user authentication system to allow users to register and login to the application.
* Create a dashboard that displays a list of projects and tasks.
* Allow users to create new projects and tasks and assign them to other users.
* Allow users to mark tasks as complete and track progress on projects.
* Include a feature to add comments and attachments to tasks.
* Include a feature to set due dates for tasks and receive reminders.

### Coding Instructions:
* Use Git for version control and create a repository for your project.
* Follow best practices for code structure, commenting, and naming conventions.
* Use a linter to ensure code consistency and adherence to coding standards.
* Write tests for your code to ensure it is working correctly.
* Use a CSS framework such as Bootstrap for styling.
* Use a CSS preprocessor such as SCSS.
* Use a package manager such as npm or yarn.
* Use a task runner such as webpack or gulp.


## References
### Pathes
Homepage:      "/" 
Login page:    "/login"
Settings page: "/settings"
Error page:    "*"

### REAT API: 
Users:
GET      api/v1/users
GET      api/v1/users/{userID}
POST     api/v1/users
PUT      api/v1/users/{userID}
DELETE   api/v1/users/{userID}

Tasks:
GET       api/v1/tasks
POST      api/v1/tasks
PUT       api/v1/tasks/{taskID}
DELETE    api/v1/tasks/{taskID}

Columns:
GET       api/v1/columns
POST      api/v1/columns
PUT       api/v1/columns/{column}
DELETE    api/v1/columns/{column}
