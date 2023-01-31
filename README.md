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

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 30%;
}
table th:nth-of-type(3) {
    width: 50%;
}
</style>

| Option                 | Type                                                              | Default                                             | Description                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position               | String                                                            | `top-right`                                         | Position of the toast on the screen. Can be any of **top-right**, **top-center**, **top-left**, **bottom-right**, **bottom-center**, **bottom-left**.                                                                     |
| newestOnTop            | Boolean                                                           | `true`                                              | Whether or not the newest toasts are placed on the top of the stack.                                                                                                                                                      |

| Method                 | Path                                                              | Parameter                                             | Description                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POST                        | /api/auth/login                                                               | username password                                             | 123                                                                                                                                                                                                             |

