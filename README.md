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
| Method          | Path               | Parameter                   | Description                 |
| --------------- | ------------------ | --------------------------- | --------------------------- |
| POST            | /api/auth/login    | 
`
{ 
  username: String
  password: String 
}`         | 123                         |
| POST            | /api/auth/logout    |           | 123                         |
| GET            | /api/auth/user    | username password           | 123                         |
