# CRUD Benchmark

This tool allows you to choose a backend(s) from a variety of different languages/frameworks and compare their performance.

## Breakdown

### Frontend

We use a simple Postman Collection to run a set of REST API calls.

### Backend

This will contain the same CRUD logic in a variety of languages/frameworks. Following contains a maintained (lexicographically sorted) list of supported languages (you are welcome and encouraged to add more!)

- Node.js (express)
- Python (flask)

### Database Wrapper

We require a database wrapper which calls the required database, this is made such that if we change the database (to Postgres or MariaDB), we only have to change the wrapper flags/code.

### Database

A single MySQL DB instance is chosen for our purpose, but this is swappable as per needs.

## Installation

TODO.

## Usage

TODO.

