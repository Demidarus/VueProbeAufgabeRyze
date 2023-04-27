
# Vue Form Assignment

This repository contains a Vue.js application that demonstrates a simple form submission and management system. The application is built using Vue 2, Vue Router, and Bootstrap Vue. The user can create, edit, and view entries with a title, text, and date. The date can be selected using a datepicker by clicking the calendar icon in the input field.

## Features

- Login page with hardcoded username and password validation
- Storage of login data in the browser's localStorage
- Details page, which can only be accessed when the user is logged in
- Form component for creating and editing entries with:
  - Title (max. 100 characters)
  - Text (max. 300 characters)
  - Character count displayed as x/300 for the text field
  - Date field with datepicker for easy date selection
  - Save button
- List of form entries with title and date, displayed below the form component
- Edit button for each entry, allowing the user to load and edit the entry in the form component
- Automatic update of the corresponding entry in the list when an entry is edited and saved in the form component
- New entries created in the form component are added to the list
- The list of entries is not persisted and will reset when the page is reloaded

## Project Setup

To set up the project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/Demidarus/VueProbeAufgabeRyze
```
2. Navigate to the project directory:
```
cd VueProbeAufgabeRyze
```
3. Install the dependencies:
```
yarn install
```
4. Start the development server:
```
yarn serve
```
5. Access the application in your browser at http://localhost:8080.

## Usage

1. Log in using the hardcoded username and password (e.g., username: `user`, password: `password`).

2. Once logged in, you will be redirected to the Details page.

3. Use the form component at the top of the page to create a new entry by filling in the Title, Text, and Date fields, and then click the Save button.

4. The new entry will be added to the list below the form component.

5. To edit an existing entry, click the Edit button next to the entry in the list. The entry data will be loaded into the form component.

6. Make the desired changes and click the Save button. The entry in the list will be updated, and the form component will be cleared.

7. To log out, click the Logout button in the top right corner. You will be redirected to the Login page.

## Contributing

If you'd like to contribute to this project, please feel free to fork the repository, create a new branch for your feature or bugfix, and submit a pull request.

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

# Vue's Generic README.md

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
