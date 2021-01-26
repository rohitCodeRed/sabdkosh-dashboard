# sabdkosh-dashboard
Project demostrate the sample chart dashboard, which contains both client side and server side code with database. Framework wise, Angular for client and NodeJs for server with Database MongoDB

## Prerequisites
* Node (https://nodejs.org/en/)
* npm (https://www.npmjs.com/)
* mongoDB (https://www.mongodb.com/)



## Installation Steps
  Install all required software
* Clone the project
` git clone https://github.com/rohitCodeRed/sabdkosh-dashboard`
* Change directory ` cd sabdkosh-dashboard `
* Run the script ` sh installationScript.sh`
* Start database MongoDB in seperate terminal ` mongod `
* Go to directory nodeServer inseperate terminal ` cd  nodeServer`
* Run the node server ` node index.js `
* Open another terminal and go to directory ` cd angularCli`
* Run the client server ` ng serve`

Your MongoDb instance will run on port 27017, Node server will run on http://localhost:3000 and Angular Client server will run on http://localhost:4200
