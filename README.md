# Askademia Web App
This repository contains the source code for the askademia learning platform.

## Requirements
* https://nodejs.org/en/download/
* Make sure you have at least Node 4.3: ```node --v```

## Quick Start
1. Clone the repository: ```git clone https://www.bitbucket.org/askademia/askademia-web.git```
2. Change current directory to '/askademia-web': ```cd askademia-web```
3. Install dependencies: ```npm install```
4. Run: ```npm start```
5. This should automatically open a new window to [http://localhost:3000](http://localhost:3000)
6. Create a new branch to start making contributions ```git checkout -b your-branch-name```

## Deploying
* When you're ready to push your changes to the repo, run ```npm run build```. This correctly bundles React in production mode and optimizes for the best performance.
* You can preview the production build by running ```NODE_ENV=production node server.js```
* Open [http://localhost:5000](http://localhost:5000) to view it in the browser
to confirm everything works!

### Creating a Page
* Create a new file in src/pages, ```YourNewPage.js```
 * Copy the code from ```src/pages/TemplatePage.js``` into your new file
 * Be sure to update the class name and the last line to reflect the new file name
* In ```src/components/app/App.js```, import your new page at the top of the file
* Add a new ```<Route>``` component to the ```App()``` function, following the style of the other pages
* Create a new function in ```App.js``` which returns your page that you imported
* And that's it!

### Backend
All the backend code is deployed using firebase. Code of the backend can be found on [/backend](/backend).

### Project Timeline
✅  : Completed  
🔄 : In progress  
♨️ : Delayed  
📦 : Shipped  


| Phase          | Description  | Status        |  Due Date |
|:-------------:|:-------------:|:-------------:|:-------------:|
| I   |  Re-write app in REACT and setup workflow  | 🔄  |  TBD |
| I | User login | | |
| I | User Sign up | | |
| I | Password Reset | | |
| I | Email user after account creation | | |
| I | Become a tutor page | | |
| I | Apply to become a tutor page after they signup | | |


## Learn More About React
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
