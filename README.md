# BigShow - A Movie Ticket Booking Application Based On [meanjs/mean](https://github.com/meanjs/mean)

BigShow is a Pulic Web Appliaction and a full-stack JavaScript open-soource solution, which probides a solid starting point for [MongoDB](https://www.mongodb.com), [ExpressJS](https://expressjs.com), [AngularJS](https://angularjs.org), and [Node.js](https://nodejs.org/en/) based applications.

## Instance sites that inspired the design of BigShow

* [BookMyShow](https://in.bookmyshow.com)
* [TicketPlease](http://www.ticketplease.com/)
* [ChalCinema](https://www.chalcinema.com/)

## Features of BigShow

  1. Fast load time.
  2. Admin can search movie details in CORS(Cross-Origin-Resource-Sharing) without catching any Error.
  3. Admin can set other users as Partial admins and provide them with special privileges.
  4. Detailed log for every check-in, tikcet booking, etc.
  5. BigShow can backup mongo database into to a .tar files automatic at midnight everyday.
  6. History of admin operate user account.
  7. Account of inactve user won't be removed or archived but stored for long term.
  8. Complete user follow system.
  9. User can rate their experience of the movie in the feedback section.


## TODO 

* Fetching services for movie data retrieval and storing them in a defined pattern.
* Hidden login panel for the Admin..
* Rating Feedback System.
* ....more.
  
  
## Online Support

* Post an [Issue](https://github.com/ManishDhawal/BigShow/issues/new)
* Email to [ManishDhawal](mailto:manishdhawal88@gmail.com)
* SkypeID: live:manishdhawal88



## Before You Begin

Before you begin we recommend you read about the basic building blocks that assemble a BigShow application:
* MongoDB - Go through [MongoDB Official Website](https://www.mongodb.com) and proceed to their Official Manual, which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](https://expressjs.com), which has a Getting Started guide, as well as an [ExpressJS](https://expressjs.com) guide for general express topics. You can also go through this [StackOverflow Thread](https://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - [Angular's Official Website](https://angularjs.org) is a great starting point. You can also use [Thinkster Popular Guide](https://thinkster.io), and [Egghead Videos](https://egghead.io).
* Node.js - Start by going through [Node.js Official Website](https://nodejs.org/en/) and this [StackOverflow Thread](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

## Prerequisites

* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), at least version 3.4 is required, and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```npm
$ npm install -g bower
```

## Downloading BigShow

There are several ways you can get the BigShow Boilerplate.

### Cloning The Git Repository

The recommended way to get BigShow is to use git to directly clone the BigShow repository:

```git
$ git clone https://github.com/ManishDhawal/BigShow.git
``` 

### Downloading The Repository Zip File

Another way to use the BigShow boilerplate is to download a zip copy from the [master branch on GitHub](https://github.com/ManishDhawal/BigShow/archive/msater.zip).

Don't Forget To Rename BigShow-master after your project name.


## Quick Install

Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop your meanTorrent application.

The boilerplate comes pre-bundled with a <code>package.json</code> and <code>bower.json</code> files that contain the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

```npm
$ npm install
```

This command does a few things:

* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* When the npm packages install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application
* To update these packages later on, just run <code>npm update</code>.

If the Installation shows error or warnings, try to re-install npm packages using the same command again.


## Running Your Project

Run your project using:

```npm
$ gulp serve
```

Your application should run on port 4200 with the development environment configuration, and it'll automatically open in your default browser window.

That's it! Your application should be running.

## Getting Started With BigShow

Before you do anything inside of the application, check the status of the <code>mongodb server</code> if it's active or not and try to save some details to check it's working properly.

For this you can Download [Robo 3T](https://robomongo.org).


## License

[The MIT License](LICENSE.md)
