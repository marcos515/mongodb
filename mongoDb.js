module.exports = mongodb
function mongodb(host) {
    var MongoClient = require('mongodb').MongoClient;
    return {
        query: function (database, collection, options, query) {
            return new Promise((resolve, reject) => {
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).find(query).toArray(function (err, result) {
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                    });
                });
            })
        },
        insert: function (database, collection, options, data) {
            return new Promise((resolve, reject) => {
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).insertOne(data, function (err, res) {
                        if (err) reject(err);
                        resolve(res);
                        db.close();
                    });
                });
            })
        },
        delete: function (database, collection, options, query) {
            return new Promise((resolve, reject) => {
                setTimeout(async ()=>{reject("Timeout")}, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).deleteMany(query, function(err, result) {
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                    });
                });
            })
        },
        update: function (database, collection, options, query, newdata) {
            return new Promise((resolve, reject) => {
                setTimeout(async ()=>{reject("Timeout")}, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).updateOne(query, newdata, function(err, result) {
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                    });
                });
            })
        },
        query: function (database, collection, options, query, limit) {
            return new Promise((resolve, reject) => {
                setTimeout(async ()=>{reject("Timeout")}, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).find(query).limit(limit).toArray(function (err, result) {
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                    });
                });
            })
        },
        join: function (database, collection, options, data) {
            return new Promise((resolve, reject) => {
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).aggregate(data).toArray(function(err, res) {
                        if (err) reject(err);
                        resolve(res);
                        db.close();
                    });
                });
            })
        }
    }
}
