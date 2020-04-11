use admin
db.createUser({user: "ikhlas", pwd: "ikhlas", roles: ["userAdminAnyDatabase"]})
use shop
db.createUser({ user: 'appDev', pwd: 'dev', roles: ["readWrite"]})
