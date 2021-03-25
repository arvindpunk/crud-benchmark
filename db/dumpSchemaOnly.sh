#! /bin/bash
# This script will take a dump of the current schema (no data) to 'schema.sql' in the same directory.
mysqldump -u root -p --no-data --databases cruddb > /db/schema.sql