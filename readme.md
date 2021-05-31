# **Order Manager**

[![alt text](https://i.imgur.com/Kf5MdoT.png)](https://marciomarquessouza.github.io/order-manager/)

## Installation and Setup Instructions

### SERVER (Backend):

Fist, move to `server` folder and place the Firebase configuration (`serviceAccountKey.json`) file at the root of the project.

Also, you need to create an `.env` file:

```sh
PORT = 5000
APP_ENV = DEV
API_KEY = "THE API KEY IS INSIDE firebaseConfig.js"
```

You can use `npm` or `yarn`

Installation:

``yarn`

To Run Test Suite:

`yarn test`

To Run using ts-node-dev

`yarn dev`

To Build the js files:

`yarn build`

To Run the Server

`yarn start`

Server default address:

`localhost:5000`

### Endpoints

GET: `api/orders`
Return all orders
Heder: Authentication (Bearer Token)

POST `api/orders`
Add new order
Heder: Authentication (Bearer Token)
Body:

```js
{
        "title": "Test Order Aoba7",
        "bookingDate": 1554284950000,
        "customer": {
            "phone": "015252098067",
            "name": "Emad Alam",
            "email": "emad.alam@construyo.de"
        },
        "address": {
            "street": "Wriezener Str. 12",
            "country": "Germany",
            "zip": "13055",
            "city": "Berlin"
        }
    }
```

PUT `api/orders/:uid`
Update Order
Heder: Authentication (Bearer Token)
Body:

```json
{
  "title": "Test Order Aoba7",
  "bookingDate": 1554284950000
}
```

POST `api/dev-token`
Return an Token (It was created only for development propose. Only works in "DEV" environment);

```js
{
    "userId": "CA1zjKyaK5O6bqOBbxgqdaYAQRD3"
}
```

## Client (Frontend)

IMPORTANT: First need to create a .env file with serviceAccountKey.json from firebase config

```.env
# To avoid message conflic with storybook
SKIP_PREFLIGHT_CHECK=true

#Firebase config
REACT_APP_APIKEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECTID=
REACT_APP_STORAGEBUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

Installation:

``yarn`

To Run Test Suite:

`yarn test`

To build:

`yarn build`

To run the Server

`yarn start`

To run the Storybook

`yarn sorybook`

Server default address:

`localhost:3000`

> ## Libs and Tools

- NPM
- Typescript
- Git
- Jest
- Firebase
- Faker
- Express
- Supertest
- Husky
- Lint Staged
- Eslint
- Ts-Node-dev
- React
- Redux Toolkit
- Storybook
- React Testing Library
- Tailwind
- Material UI
- craco
- module-alias
- Figrma (UI)
- Trello (Kanban Board)

> ## Reference Links

1. [Figma Drafts](https://www.figma.com/file/N0i0knZct9WIRdna2IRyWM/ORDER-MANAGER?node-id=0%3A1)
2. [Kanban Board (Trello)](https://trello.com/b/vSS5IUd2)

## Project Snapthots

Login
[![alt text](https://i.imgur.com/tQvJe1p.png)]()

Order List
[![alt text](https://i.imgur.com/Z75uqQ1.png)]()

Order Detail
[![alt text](https://i.imgur.com/0ulKATL.png)]()

Order Form
[![alt text](https://i.imgur.com/fwEtkix.png)]()

StoryBook
[![alt text](https://i.imgur.com/25CeHcY.png)]()

```

```
