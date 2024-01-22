# strugBits

Welcome to strugBits, a chat application for seamless communication! This repository contains the source code for the project.

## Getting Started

### Clone the Repository

To get started with strugBits, clone the repository using the following command:
```bash
git clone https://github.com/Shamil-Aahmed/strugBits.git
```

## install dependencies
```
cd strugBits
npm install
```
## Run the application.
```bash
npm start
```
## Database 
Open http://localhost:3000/auth/interaction/register in your web browser to Register.

1. You will be directed to auth/interaction/login.

2. Enter your credentials to complete the login process.

3. Once loggedin, start chatting and enjoy the strugBits experience!

## Msgs can be deleted !!
run on any API Platform ( POSTMAN )
### Delete for me !
```
endPoint : localhost:3000/v1/chats/delete-for-me/:chatId ( chatId can be found in MongoDB Compass )
method : PUT
```
### Delete for Everyone !
```
endPoint : localhost:3000/v1/chats/delete-for-everyone/65adc4d477726c885b769dcb
( chatId can be found in MongoDB Compass )
method : PUT
```

