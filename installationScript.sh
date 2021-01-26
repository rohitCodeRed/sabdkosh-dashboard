#!/bin/shins    

#Go to directory angularCli.
cd ./angularCli

# Run npm install for angular project.
npm install

#Return back to root of project
cd ..

#Go to directory nodeServer
cd ./nodeServer

#install all npm packages related nodeServer.
npm install

#return back to root.
cd ..

#exit
exit