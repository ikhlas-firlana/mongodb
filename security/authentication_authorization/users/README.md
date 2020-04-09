# Command
first thing first if already installed mongodb, then stop the service. use start service by command
```
mongod --auth
```
its use authentication for access schema.


if already run, then run seperate command to check 
```
show dbs
show roles
```
there will be an error for checking.


## ADMIN
for creating user in terminal `mongo` then run command
```
use admin
db.createUser({user: "ikhlas", pwd: "ikhlas", roles: ["userAdminAnyDatabase"]})
```
for creating user admin. then login command
```
db.auth('ikhlas','ikhlas')
```
for getting authenticated as admin


