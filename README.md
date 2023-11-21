# Getting Started with Team Dashboard App


## Project Setup
1. Clone this repo
2. cd into the project directory and run:
    - `npm install` to install the dependencies
    - `npm run server` to run the API on [http://localhost:3001](http://localhost:3001)
    - `npm start` in a new terminal at the same location to start the frontend app on [http://localhost:3000](http://localhost:3000) 

## How to use the app?

1. Once you hit the URL (http://localhost:3000) in your browser, you will see the home page.
2. Hope page has basic details about the team and the projects
3. If you need to see more details, you need to sign in (Test credentials are displayed there)
4. Once signed in, you will see more details like member details and project details.
5. In addition, you will also see project metrics and a discussion forum. 
6. You can see all the previous messages and send new messages
7. Currently, all the data is retrieved from JSON files.
8. With the way the application is built, we can easily replace JSON data with real database like Mongo DB

## Toolchain used

### Frontend

- **Framework:** React
- **Language:** JavaScript
- **Styles:** CSS
- **UI Libraries:** React Bootstrap
- **Graphs:** React Chart JS
- **Build Tools:** Create React App (CRA), Babel

### Backend

- **Framework:** Express
- **Language:** JavaScript
- **Database:** JSON Files

### Development

- **Version Control:** Git (GitHub)
- **IDE:** VS Code
- **Design:** Pen and paper
