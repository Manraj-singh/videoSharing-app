
# Video Sharing App

This is a simple video sharing application built using React.js and Node.js. Users can upload, view and share videos with others on this platform.

## Getting Started


- Clone the repository
- Navigate to the frontend folder and run npm install to install the dependencies
- create a secretkey.js file in src folder and include below object with firebase config
```bash
export const firebaseConfig = {
apiKey: "",
authDomain:"",
projectId:"",
storageBucket:"",
messagingSenderId:"",
appId:""
};
```
- Run npm start to start the frontend server
- Navigate to the backend folder and run npm install to install the dependencies
- Create a .env file in the backend folder with the following variables:
```bash
MONGOURI=<your_mongodb_uri>
JWT = <your_jwt_secret>
Run npm start to start the backend server
```
- The application can now be accessed at http://localhost:3000/
- the backend will be running at http://localhost:8000/

## Features
- User authentication and authorization using JWT tokens
- Video uploading, viewing and sharing
- Commenting and liking videos
- video search functionality

## Technologies Used
- React.js
- Node.js
- Express.js
- MongoDB









