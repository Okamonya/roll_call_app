# User Management App
Welcome to the User Management App! This application allows you to manage user data, including adding, updating, and deleting users. Additionally, you can mark user attendance with a roll call feature.

Features
register users
List users with their details (first name, second name).
Edit user information.
Delete users.
Mark user attendance with roll call.

# Usage
The home page displays a list of users.
Use the "Edit" button to update user information.
Use the "Delete" button to remove users from the list.
Use the "Toggle Attendance" button to mark user attendance (present/absent).

#   Context and Data Management
The UserContext provides context values for user-related functions and data.
The UserProvider wraps your app and manages the user state.
The useUserContext hook allows components to access the context values.

#   Technologies Used
React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making API requests.

#   Folder Structure
src: Contains the main source code for the application.
components: Holds React components.
hooks: Custom hooks for accessing context values.
axios.js: Axios configuration for API requests.
App.js: Main component that sets up the app's structure.
index.js: Entry point for rendering the app.
