# CRUD Benchmark

This tool allows you to choose a backend(s) from a variety of different languages/frameworks (and possibly compare their performance).

## Breakdown

### Frontend

We use a simple Postman Collection to run a set of REST API calls.

### Backend

This will contain the same CRUD logic in a variety of languages/frameworks. Following contains a maintained (lexicographically sorted) list of supported languages (you are welcome and encouraged to add more!)

- Node.js (express)
- Python (flask)

### Database

A single MySQL DB instance is chosen for our purpose.

DB name: cruddb
Table name: user_info
Schema:
user: VARCHAR(255)
about: VARCHAR(2047)
updated_at: DATETIME (auto-generated, auto-updated)
created_at: DATETIME (auto-generated)

### Requirements and Installation
Docker and docker-compose.

## Usage

1. Navigate to root of the project.
2. Run `docker-compose --env-file backends/node-express/.env up`, replacing `node-express` with the corresponding backend.
Note: This will set up a development container up and you can make changes to the source, restarting would pick up the new changes.
3. Exec into the sql container and run `./createDB.sh`. This step won't be required in the future.

## Contribution

