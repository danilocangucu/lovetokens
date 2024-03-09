
# Love Tokens
## Introduction
Love Tokens is a platform for sharing love quotes, designed to deepen connections between individuals by facilitating heartfelt expression. Catering to anyone seeking to convey affection to loved ones, including romantic partners, friends, and family members, Love Tokens provides a simple solution in our busy lives where expressing feelings can be overlooked. Visit [lovetokens.netlify.app](https://lovetokens.netlify.app/) to start spreading love today!

### Getting Started
#### Prerequisites:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

#### Installation:
Clone the repository:
```bash
git clone https://github.com/danilocangucu/lovetokens.git
```

#### Set up the environment:
Ensure the following environment variables are set:
- `REACT_APP_LOVE_TOKEN_API_URL=https://13.49.67.88:3000`
- `REACT_APP_LOVE_TOKEN_TEST_API_URL=http://13.49.67.88:3001`

**Attention!**
The `REACT_APP_GOOGLE_CLIENT_ID` environment variable is not defined in this readme so you will not be able to Login with Google locally.

#### Installation steps:
1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) by following the instructions on their respective websites.

2. Navigate to the project directory:
   ```bash
   cd lovetokens
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

#### Scripts:
The following scripts are available in package.json:

- `start`: Runs the application.
- `test`: Runs tests for the application.
- `build`: Builds the application for production.

To run the app:
```bash
npm start
```

To run the app tests:
```bash
npm test
```

To build the application:
```bash
npm build
```

## General Features

#### Light ☀️ and Dark 🌙 Modes:
Switch between light and dark themes to suit your preferences and enhance readability.

![Theme switching](https://i.postimg.cc/LsRs0rd3/themes-gif.gif)

### Love Archive:
Explore our collection of Love Tokens in the Love Archive.

#### Categories:
Filter Love Tokens by categories such as Empowerment, Intimacy, Serenity, Affection, Adventure, and more.

#### Sort by:
Sort Love Tokens based on creation date.


### Single Love Token:
Displays detailed information about a specific Love Token, including its content, creator, creation date, and associated categories.

![Single Love Token page screenshot](https://i.postimg.cc/Ghw9yBMf/Screenshot-2024-03-07-at-01-26-53.png)

### Login and Registration:
Access the full features of Love Tokens by logging in or registering for an account.
-   **SOON:** Log with your Google Account!

## Restricted Features:

### Profile:
View your user information and activity within Love Tokens.
    -   See your user role, Love Tokens created, join date, and Love Tokens added to your Affection List.
    -   Have the option to delete your account if desired.

![Profile page screenshot](https://i.postimg.cc/j2rKLfsQ/Screenshot-2024-03-07-at-01-31-29.png)

### Appreciation Atelier:
Access the official Love Token dashboard to:
-   Create personalized Love Tokens expressing your feelings.
-   Tag your Love Tokens with various categories.
-   Manage your created Love Tokens, including editing or deleting them as needed.

![Appreciation Atelier screenshot](https://i.postimg.cc/QM9rmmCJ/Screenshot-2024-03-07-at-01-32-47.png)

### Affection List
Keep track of your favorite Love Tokens from the Love Archive with the My Affection List feature:
-  Easily manage your collection of Love Tokens by editing the list order or deleting tokens.
-  Curate a selection of Love Tokens that resonate with you the most.
-   **SOON:** Share your Affection List with people you love!

![Affection List screenshot](https://i.postimg.cc/ncR5Wm6R/affection-list-gif.gif)

## Admin Features:
Admins are users with more powers than the rest of users. In the Appreciation Atelier, they are allowed to:
-   Edit all Love Tokens.
-   Delete any Love Token.
- **SOON:** UI to delete any user (right now an admin can in the backend)

![Screenshot of admin priviledges in Appreciation Atelier](https://i.postimg.cc/d0ymbrQP/Screenshot-2024-03-07-at-16-01-40.png)
*You can log as an admin using the e-mail: admin@yesadmin.com, password: theboss. Be kind and don't delete everything :D*


## Architecture & Design

#### Folder Structure:

- **public:** Contains the single HTML file and icons directly served by the web server. This HTML file acts as the entry point for the React application, which then dynamically renders all components and content.    
-   **src:**
    -   **components:** Reusable UI components organized into folders such as affectionlist, appreciationatelier, headers, home, login, lovearchive, navbar, shared, and singlelovetoken.
    - **contexts:** Provides a React context provider for managing the global state of light and dark themes.
    -   **images:** Stores images used in the application.
	- **models:** Contains data models for categories, love tokens, users, and types used across the application.    	
	- **pages:** Houses page-level components for various application routes, including components for accessing the Appreciation Atelier, user authentication and authorization, user profile, Love Archive, Affection List management, and individual Love Token display.
	- **store:** Centralizes Redux-related files, incorporating React Tool Kit Query for efficient API interaction. Responsible for managing application state through reducers, actions, and integrated modules, covering features like the user's Affection List, authentication, Love Tokens, and notifications.
	- **styles:** Contains global stylesheets and styling variables. Utilizes SASS and Tailwind for styling purposes.    	
	- **tests:** Contains unit tests for store-related functionalities, including API interactions and Redux slices.
	- **utils:** Houses utility functions used across the application.
#### Data Flow:
Data flows in the application primarily through React Context API and Redux for global state management. Redux Toolkit Query (RTK Query) handles asynchronous operations such as API calls. Actions are dispatched to Redux reducers, which update the store accordingly, and components subscribe to the relevant parts of the store to react to changes.

#### Component Structure:
The component structure of the application is briefly illustrated in the diagram below:

![Diagram made with https://antonioru.github.io/beautiful-react-diagrams/](https://i.postimg.cc/m2r0LV4N/Screenshot-2024-03-07-at-00-43-31.png)

*Diagram made with [beautiful-react-diagrams](https://antonioru.github.io/beautiful-react-diagrams/)*

- **PageHeader:** Renders page titles and subtitles for various components.
- **DataLoader:** Manages data loading states for fetching information from APIs.
- **HeaderTwo:** Displays secondary headers within components.
- **NotificationBox:** Shows notifications and prompts for user actions.
- **Profile:** Represents the user's profile page, displaying user information.
- **Form:** Handles user input fields for actions like registration and login.
- **InputField1, InputField2, InputField3:** Represents input fields for username, email, and password.
- **Register:** Manages user registration functionality.
- **Login:** Handles user login functionality.
- **SingleLoveToken:** Displays detailed information about a single Love Token, including its content and categories.

## Testing:

The testing suite, comprising 6 test suites and 22 individual tests in total, evaluates the application's store functionalities. Tests for the Affection List API encompass operations like adding, fetching, and updating love tokens, ensuring effective management of Affection Lists. Similarly, LoveTokenApi tests features such as fetching, creating, and deleting love tokens, ensuring seamless store operations. AuthSlice and CategoriesSlice Reducer tests validate authentication status toggling and category list manipulation accuracy, fortifying the store's resilience and robustness. These tests represent a subset of comprehensive efforts to ensure store stability.

**Attention!** To conduct tests on the Testing database, utilize `process.env.REACT_APP_LOVE_TOKEN_TEST_API_URL` instead of `mockBaseAffectionListUrl` or `mockBaseUserUrl`. Ensure to update the variables in the files `src/store/affectionListApi.ts` and `userApi.ts` accordingly. Additionally, uncomment the tests in `affectionListApiDatabase.test.ts` and `userApiDatabase.test.ts`.

- **Libraries/Frameworks Used:** Jest is used as the testing framework along with React Testing Library for unit testing. The `react-scripts` package is utilized for running tests.

- **Running Tests:** Tests can be run using the following command:
  ```
  npm test
  ```

**Deployment:**

I deployed the project using Netlify and GitHub. By linking the GitHub repository to Netlify, the application automatically deploys whenever changes are pushed to the repository. The deployed result can be viewed at [lovetokens.netlify.app](https://lovetokens.netlify.app/).

### Backend API on AWS EC2:

Base URL: [https://13.49.67.88:3000](http://13.49.67.88:3000/)

I created a backend API on AWS EC2 using Node.js, Express, and Mongoose, implementing endpoints for Love Token management, user authentication, and Affection List management. SSL

Apologies for the oversight. Here's the updated table with the missing endpoints:

| Endpoint                                 | Description                                                 |
|------------------------------------------|-------------------------------------------------------------|
| **Love Token Management**                |                                                             |
| GET /love-tokens                         | Retrieve all Love Tokens                                    |
| GET /love-tokens?categories=CAT1,CAT2   | Retrieve filtered Love Tokens by categories                |
| GET /love-tokens/{tokenNumber}          | Retrieve a Love Token by token number                       |
| POST /love-tokens                        | Create a new Love Token                                     |
| PUT /love-tokens/{tokenNumber}           | Update an existing Love Token                               |
| DELETE /love-tokens/{tokenNumber}        | Delete a Love Token                                         |
| GET /user-love-tokens/{userId}          | Retrieve Love Tokens created by a specific user             
| GET /featured-love-tokens                | Retrieve all featured Love Tokens                           
| GET /categories                          | Retrieve all categories of Love Tokens                      
| **User Authentication**                  |                                                             |
| POST /register                           | Register a new user                                         |
| POST /login                              | Authenticate user login                                    |
| POST /check-auth                         | Verify if user's authentication is valid                    |
| POST /auth/google                        | Verify & grant access if user can login with Google account |
| **My Affection List Management**         |                                                             |
| GET /affection-list                      | Retrieve user's Affection List                              |
| POST /affection-list/                    | Add a Love Token to user's Affection List                   |
| PUT /affection-list                      | Change the order of Love Tokens on the Affection List       |
| DELETE /affection-list/                 | Remove a Love Token from user's Affection List              

### Acknowledgements
This project was completed as part of the frontend module at Integrify in March 2024. I would like to extend my heartfelt thanks to Yun Ji and Yuanke Miao for their daily companionship and exchange of ideas during the three intense weeks of building this project!
