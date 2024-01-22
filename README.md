# strugBits

Welcome to strugBits, a chat application for seamless communication! This repository contains the source code for the project.

## Getting Started

### Clone the Repository

To get started with strugBits, clone the repository using the following command:
```bash
git clone https://github.com/Shamil-Aahmed/strugBits.git
```
### Database Used MONGODB

## install dependencies
```
cd strugBits
npm install
```
## Run the application.
```bash
npm start
```

Open http://localhost:3000/auth/interaction/register in your web browser to Register.

1. After Registration, You will be directed to auth/interaction/login.

2. Enter your credentials to complete the login process.

3. Once logged-in, start chatting and enjoy the strugBits experience!

## Fetch all your undeleted msgs
```
endPoint : http://localhost:3000/v1/chats/get-all-chats
method : GET
```
## Search in the chats ( using browser )
```
endPoint : http://localhost:3000/v1/chats/show-chat?search='your-searched-word'
method : GET
```

## Msgs can be deleted !!
run on any API Platform ( POSTMAN )
#### Delete for me !
```
endPoint : localhost:3000/v1/chats/delete-for-me/:chatId ( chatId can be found in MongoDB Compass )
method : PUT
```
#### Delete for Everyone !
```
endPoint : localhost:3000/v1/chats/delete-for-everyone/65adc4d477726c885b769dcb ( chatId can be found in MongoDB Compass )
method : PUT
```
