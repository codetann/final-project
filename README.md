# Find Food App

An app that groups friends together who can't decide on where to eat. It introduces local restaurants in a tinder-like fashion, allowing the friends to swipe right on the places they want to eat and left on the ones they don't. Once everyone has gone through, it will select the restaurant based on group majority.

## Tech Stack

**Client:** React, Chakra UI, Socket.io

**Server:** Node, Express, Socket.io

## Features

- Favorite Restaurants
- Nearby Restaurants
- Responsive Design
- Live Results

## Installation

Install though github

```bash
   git clone https://github.com/codetann/final-project.git
   cd final-project
   npm install
```

## Run Locally

Start the server

```bash
  npm run dev
```

Once ran, SQLite will automatically create the development databases for you. The Frontend is served through `react-scripts` and
the Backend is ran with `babel-node`. Frontend is served on `port: 3000`.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

cloudinary:
`CLOUD_NAME`
`API_KEY`
`API_SECRET`
`REACT_APP_CLOUD_NAME`
`REACT_APP_API_KEY`
`REACT_APP_API_SECRET`
`REACT_APP_TESTING`

database:
`DB_USERNAME`
`DB_PASSWORD`

web tokens:
`COOKIE_SIGNATURE`

yelp:
`YELP_CLIENT_ID`
`YELP_API_KEY`

jwt:
`ACCESS_TOKEN_KEY`
`REFRESH_TOKEN_KEY`

ports:
`SERVER_PORT`
`AUTH_SERVER_PORT`
