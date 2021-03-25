#! /bin/bash
# This script will take a dump of the current data (no schema) to 'data.sql' in the same directory.
# WIP   
mysqldump -u root -p --no-create-info --databases cruddb > /db/data.sql