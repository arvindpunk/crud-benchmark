#! /bin/bash
# This script will import the schema and users into MySQL.
mysql -u root < /db/schema.sql
mysql -u root < /db/users.sql
mysql -u root < /db/createTables.sql