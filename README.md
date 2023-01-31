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
| Method          | Path               | Parameter                               | token                 | Description                     |
| --------------- | ------------------ | --------------------------------------- | ---------------------- | ------------------------------ |
| POST            | /api/auth/login    | username: String <br> password: String  |                       | login account                   |
| POST            | /api/auth/logout   |                                         |                       | log out                         |
| GET             | /api/auth/user     |                                         | Required              | get a member                    |

### Rooms


