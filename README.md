# Space Manager API

## Table of contents:

* [Description](./README.md#description)
  * [Task](./README.md#task)
* [Setup](./README.md#setup)
* [Running the app](./README.md#running-the-app)
* [Running the tests](./README.md#running-the-tests)

## Description

This app is a simple Rails app that uses React components to search and display Github's API to search through its repositories by any search term.

## Setup

1. Make sure you have Ruby 2.3 installed in your machine. If you need help installing Ruby, take a look at the [official installation guide](https://www.ruby-lang.org/en/documentation/installation/).

2. Install the [bundler gem](http://bundler.io/) by running:

    ```gem install bundler```

3. Clone this repo:

    ```git clone git@github.com:MisterDeejay/github-search-app.git```

4. Change to the app directory:

    ```cd github-search-app```

5. Install dependencies:

    ```bundle install```

## Running the app

6. Start the server

    ```rails s```

7. Visit homepage `http://localhost:3000`

8. Enter search term and submit for repo results!

## Development Notes

* This exercise was completed mainly as a way to get re-familiarize myself with React components. The body component implements most of the logic including the request to Github's API. React handles a lot of the rendering magic, mapping each repo hash that's returned from Github's API to the GithubResult component. Next steps would include using Foundation and Bootstrap to improve the UI to give it a polished design, as well as, adding pagination logic for the entire list of results, rather than simply displaying the first page.
