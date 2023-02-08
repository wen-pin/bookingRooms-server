# bookingRooms-server

## Table of Contents

- [Installation](#installation)
- [API](#aPI)

## Installation

```
$ npm install
```

## API

### Auth
| Method          | Path               | Body                                    | token                  | Description                     |
| --------------- | ------------------ | --------------------------------------- | ---------------------- | ------------------------------- |
| GET             | /api/auth/user     |                                         | Required               | get a member                    |
| POST            | /api/auth/login    | username: String <br> password: String  |                        | login account                   |
| POST            | /api/auth/logout   |                                         |                        | log out                         |


### Rooms
| Method          | Path               | Body                                    | Params                  | Description                     |
| --------------- | ------------------ | --------------------------------------- | ----------------------- | ------------------------------- |
| GET            | /api/rooms          |                                         |                         | get all rooms                   |
| GET            | /api/rooms          |                                         | id: Number              | get the room                    |
| POST           | /api/rooms          | id:Number <br> landlord: String <br> spaceInfo: String <br> title: String <br> country: String <br> location: locationSchema <br> isAcceptPet: Boolean <br> limitPeople: Number <br> price: priceSchema <br> pattern: patternSchema <br> averageRating: Number <br> evaluationStandards: [evaluationSchema] <br> allMessages: [messageSchema] <br> img: { roomQuality: Number } <br> alleqptAndServices: [alleqptAndServicesSchema] <br> notes: notesSchema                               |                         | creat the room                  |
| PATCH          | /api/rooms     | id:Number <br> landlord: String <br> spaceInfo: String <br> title: String <br> country: String <br> location: locationSchema <br> isAcceptPet: Boolean <br> limitPeople: Number <br> price: priceSchema <br> pattern: patternSchema <br> averageRating: Number <br> evaluationStandards: [evaluationSchema] <br> allMessages: [messageSchema] <br> img: { roomQuality: Number } <br> alleqptAndServices: [alleqptAndServicesSchema] <br> notes: notesSchema                               |                         | update the member               |



