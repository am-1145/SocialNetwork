# SocialNetwork
Social Network API is the one where you can follow each other, create your post and also it is secured
## Features
* Sign up and login using JWT for authentication
* Create, read, update and delete posts
* Follow and Unfollow other users
* View all post shared by particular user based on the latest first
*  create, update, view, and delete user profiles. 

## Technologies
* Node JS
* Mongo DB
* Express Js


## Installation and Setup
To install and set up the project, follow the instructions below:

1. Cloning the Repository
```bash
git clone https://github.com/am-1145/SocialNetwork.git
```
2. Change Directory
```bash
cd SocialNetwork
```

3. Install Dependencies
```bash
npm install
```
4. Create a file with name .env in your root directory and add this to it
```bash
MONGO_URL=YOUR_MONGO_DB_URL
JWT_SECRET='YOUR SECRET KEY'
```

5. Run the server
```bash
nodemon index.js
```
After this your server will Start and it runs on port 4000.

## How to Test
To test the functionality and to know how to send parameter please see the screenshot of Postman attached with this repository.

