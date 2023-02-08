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
| GET            | /api/rooms/:id      |                                         | id: Number              | get a room                      |
| POST           | /api/rooms          | id:Number <br> landlord: String <br> spaceInfo: String <br> title: String <br> country: String <br> location: locationSchema <br> isAcceptPet: Boolean <br> limitPeople: Number <br> price: priceSchema <br> pattern: patternSchema <br> averageRating: Number <br> evaluationStandards: [evaluationSchema] <br> allMessages: [messageSchema] <br> img: { roomQuality: Number } <br> alleqptAndServices: [alleqptAndServicesSchema] <br> notes: notesSchema                               |                         | creat a room                    |
| PATCH          | /api/rooms     | id:Number <br> landlord: String <br> spaceInfo: String <br> title: String <br> country: String <br> location: locationSchema <br> isAcceptPet: Boolean <br> limitPeople: Number <br> price: priceSchema <br> pattern: patternSchema <br> averageRating: Number <br> evaluationStandards: [evaluationSchema] <br> allMessages: [messageSchema] <br> img: { roomQuality: Number } <br> alleqptAndServices: [alleqptAndServicesSchema] <br> notes: notesSchema                               |                         | update a room                   |

### Landlord
| Method          | Path                    | Body                                    | Params                  | Description                     |
| --------------- | ----------------------- | --------------------------------------- | ----------------------- | ------------------------------- |
| GET             | /api/landlordInfos      |                                         |                         | get all landlordInfo            |
| GET             | /api/landlordInfos/:id  |                                         | id: String              | get a landlordInfo              |
| POST            | /api/landlordInfos      | name: String <br> isAuth: Boolean <br> isNice: Boolean <br> responseRate: String <br> selfIntroduction: String <br> language: String                                                          |                         | create a landlordInfo           |
| PATCH           | /api/landlordInfos/:id          | name: String <br> isAuth: Boolean <br> isNice: Boolean <br> responseRate: String <br> selfIntroduction: String <br> language: String                                        | id: String              | update a landlordInfo           |

### BookingRoom
| Method          | Path                    | Body                                    | Params                  | Description                     |
| --------------- | ----------------------- | --------------------------------------- | ----------------------- | ------------------------------- |
| GET             | /api/bookingRooms       |                                         |                         | get all bookingRooms            |
| POST            | /api/bookingRooms/v1    | username: String                        |                         | get ${username} bookingRooms    |
| GET             | /api/bookingRooms      | bookerName: String <br> bookingDate: String <br> payment: String <br> roomId: Number                                                                                                                               |         | create a bookingRoom            |
