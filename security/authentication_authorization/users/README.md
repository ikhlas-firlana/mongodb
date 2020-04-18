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


## Create ADMIN
for creating user in terminal `mongo` then run command
```
use admin
db.createUser({user: "ikhlas", pwd: "ikhlas", roles: ["userAdminAnyDatabase"]})
```
for creating user admin. 
then restart the service `mongo` with authentication
```
mongod --auth
```
then open new terminal to start operate database using
```
mongo -u ikhlas -p ikhlas --authenticationDatabase admin
use admin
```
for getting authenticated as admin and login in admin database. 

### Create new User and assign in database
create the process new user need use an admin account so login as admin in new terminal
```
mongo -u ikhlas -p ikhlas --authenticationDatabase admin
use admin
```
then create user and assign database example database `shop` with command
```
use shop
db.createUser({ user: 'appDev', pwd: 'dev', roles: ["readWrite"]})
```
done create new user.

## User operate for Database
```
mongo -u appDev -p dev --authenticationDatabase shop
use shop
db.products.insertOne({name: 'Book one', price: 3000})
db.products.insertOne({name: 'Book two', price: 500})
```