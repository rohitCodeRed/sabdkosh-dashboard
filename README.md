# sabdkosh-dashboard
Project demostrate the sample chart dashboard, which contains both client side and server side code with database. Framework wise, **Angular** for client and **NodeJs** for server with Database **MongoDB**.  
  
For Server side programming it uses **NodeJs** with **Express** framework, through which all login and registration **REST Api** with **Bearer token Authentication** are developed.  

For Client side programming project uses **Angular** framework. It have **login** and **registration** services with the help of **Http**, **Observable** modules. It also demonstrate all types of charts in **highCharts** npm module.  


## Prerequisites
* Node (https://nodejs.org/en/)
* npm (https://www.npmjs.com/)
* mongoDB (https://www.mongodb.com/)



## Installation Steps for linux or MAC
  Install all required software
* Clone the project
` git clone https://github.com/rohitCodeRed/sabdkosh-dashboard`
* Change directory ` cd sabdkosh-dashboard/ `
* Run the script ` sh installationScript.sh`
* Start database MongoDB in seperate terminal ` mongod `
* Go to directory nodeServer inseperate terminal ` cd  sabdkosh-dashboard/nodeServer`
* Run the node server ` node index.js `
* Open another terminal and go to directory ` cd sabdkosh-dashboard/angularCli`
* Run the client server ` ng serve`

Your MongoDb instance will run on port 27017, Node server will run on http://localhost:3000 and Angular Client server will run on http://localhost:4200

## Installation Steps for Windows
  Install all required software
* Clone the project
` git clone https://github.com/rohitCodeRed/sabdkosh-dashboard`
* Change directory ` cd sabdkosh-dashboard `
* Go to directory ` cd sabdkosh-dashboard\angularCli`
* Run `npm install`
* Go to directory ` cd sabdkosh-dashboard\nodeServer`
* Run `npm install`
* Start database MongoDB in seperate terminal ` mongod `
* Go to directory nodeServer inseperate terminal ` cd  sabdkosh-dashboard\nodeServer`
* Run the node server ` node index.js `
* Open another terminal and go to directory ` cd sabdkosh-dashboard\angularCli`
* Run the client server ` ng serve`

Your MongoDb instance will run on port 27017, Node server will run on http://localhost:3000 and Angular Client server will run on http://localhost:4200

## Installation and Running project with Docker
* Install **Docker** (https://docs.docker.com/engine/install/)  
  
  Both **angular** and **node** app docker image are pushed to **Docker** Hub
  - https://hub.docker.com/r/docker0605/sabdkosh-dashboard_angular_app  
  - https://hub.docker.com/r/docker0605/sabdkosh-dashboard_node_app  
    
* Run the command in directory **/sabdkosh-dashboard** ` docker-compose up `  
  
  **AngularCli** app will run on http://localhost:4200  and **NodeServer** app will run on http://localhost:3001  
    
      
        

 

## Server screen shots  
![7XNeEHD](https://user-images.githubusercontent.com/35483024/105984149-be244480-60bf-11eb-9067-3f750b6eaaf2.png)
![c2cbpEM](https://user-images.githubusercontent.com/35483024/105984164-c1b7cb80-60bf-11eb-8984-01cc5b3adf6a.png)  



## Client screen shots  
![loginPage](https://user-images.githubusercontent.com/35483024/105985900-2a07ac80-60c2-11eb-978e-dda6b33a56e2.png)
![LAyWbwg](https://user-images.githubusercontent.com/35483024/105984170-c3818f00-60bf-11eb-9432-b85d774ef04c.png)
![gsfxOG6](https://user-images.githubusercontent.com/35483024/105984166-c2506200-60bf-11eb-877b-20c6c97b3b2c.png)
![a0njljc](https://user-images.githubusercontent.com/35483024/105984157-bfee0800-60bf-11eb-9bc9-bd410c0bf4da.png)
![BbOdfFd](https://user-images.githubusercontent.com/35483024/105984163-c0869e80-60bf-11eb-8636-20fd6199520e.png)

