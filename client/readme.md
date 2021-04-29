# **Order Manager**

[![alt text](https://i.imgur.com/Kf5MdoT.png)]()

## Installation and Setup Instructions

## Client (Frontend)

IMPORTANT: First you need to create a `.env` file in `.\client` folder with `serviceAccountKey.json` from firebase config

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

Move to `client` folder. You need to change the file `client/src/config/firebase.config.ts` with the `serviceAccountKey.json` variables.

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
