const database = require("./mongoDb")
require('dotenv').config()

var db = database(process.env.mongoHost)
