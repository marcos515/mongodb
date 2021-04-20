const database = require("./mongoDb")
require('dotenv').config()

var db = database(process.env.mongoHost)
var options = { useNewUrlParser: true, useUnifiedTopology: true }

db.createDatabase("alunos", options).then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})
db.createCollection("alunos", "collection", options).then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})

db.insert("alunos", "collection", options, {teste: "testado"}).then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})
db.query("alunos", "collection", options, {}).then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})