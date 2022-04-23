# Taikaluukku
Typescript website for streaming videos from Google Drive. Using googleapis.

## Install

* run `npm install` in backend and frontend folders.
* create `.env` file in the backend folder.
* In backend folder command `npm run dev` starts local backend.
* In frontend command `npm start` starts React frotend.

## Transpiling Typescript and Building production build of frontend

For production you want to generate JavaScript code for the backend and generate a production build frontend for the backend to use.

* Inside backend folder `npm run tsc` Transpiles Typescript into /dist folder. You can change JavaScript version targets inside the backend/tsconfig.json file.
* Inside backend folder `npm run build:ui` creates a frontend build inside the created /dist folder that the Transpiled code will use.
* You can now run the production version of the program using `npm start`.
* You can remove the generated production files using `npm run clean`.

## Google API [Link](https://console.cloud.google.com/)

This project relys on Google Cloud Platform for Google Drive APIs. 

You need to create a project and enable Drive APIs and generate Client ID and Secret. You need a refresh token you can generate in Oauth playground **!! Remember to chose Drive API v3 in the scopes !!**.

Use same Google profile for all the parts.

[Example Video by Google](https://www.youtube.com/watch?v=DYAwYxVs2TI).

[Generating Refresh Token](https://www.youtube.com/watch?v=hfWe1gPCnzc).

## Enviromental variables

* `MONGODB_URI` URI of your mongodb database (unused at the moment) example `mongodb+srv://<database>:<password>@cluster0.xbw3k.mongodb.net/<databasename>?retryWrites=true&w=majority`
* `PORT` Set the port you want to use for local backend development (Frontend uses port 3000 by default).
* `SECRET` Any long set of random numbers and letters.
* `CLIENT_ID` Get from Google console.
* `CLIENT_SECRET` Get from Google console.
* `REDIRECT_URI` https://developers.google.com/oauthplayground.
* `REFRESH_TOKEN` Generated in Oauth playground.
