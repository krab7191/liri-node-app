# LIRI node app

A language interpretation and recognition interface. The is a command line node app which takes commands, hits the Twitter, OMDB and spotify APIs and logs information to the console.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

LIRI requires [nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) to install and run. NPM comes with nodejs, so once you have node downloaded and installed you are good to go. To verify they are installed you can run:
```
node -v
```
```
npm -v
```
You will also need to sign up for Twitter and Spotify developer accounts in order to get API keys and client secrets. These need to be put in a *.env* file of the following format.

```
# Spotify API keys

SPOTIFY_ID=your-id-here
SPOTIFY_SECRET=your-secret-here

# Twitter API keys

TWITTER_CONSUMER_KEY=your-key-here
TWITTER_CONSUMER_SECRET=your-secret-here
TWITTER_ACCESS_TOKEN_KEY=your-token-here
TWITTER_ACCESS_TOKEN_SECRET=your-secret-here

# OMDB API key

OMDB_API_KEY=your-key-here
```

### Installing

Once you have node.js and your .env file ready, clone this repo and put the .env in the root folder. Next run the following commands from the command line:
```
npm i
```
That's it! NPM will install the project's dependencies and you're ready to run LIRI. The commands are:
```
node liri.js tweets
node liri.js spotify <song title>
node liri.js movie <movie title>
node liri.js doIt
```


## Built With

* [node.js](https://nodejs.org/en/) - The runtime environment used
* [NPM](https://www.npmjs.com/) - Dependency Management


## Authors

* **Karsten Rabe** - [krab7191](https://github.com/krab7191)

## License

This project is licensed under the MIT License
