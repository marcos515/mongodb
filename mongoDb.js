module.exports = mongodb
function mongodb(host) {
    var MongoClient = require('mongodb').MongoClient;
    return {
        query: function (database, collection, options, query) {
            return new Promise((resolve, reject) => {
                setTimeout(async () => { reject("Timeout") }, 5000)
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
                setTimeout(async () => { reject("Timeout") }, 5000)
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
<<<<<<< HEAD
        delete: function (database, collection, options, query) {
            return new Promise((resolve, reject) => {
                setTimeout(async ()=>{reject("Timeout")}, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).deleteMany(query, function(err, result) {
                        if (err) reject(err);
                        resolve(result);
=======
        createDatabase: function (database, options) {
            return new Promise((resolve, reject) => {
                setTimeout(async () => { reject("Timeout") }, 5000)
                var url = host
                if (host.endsWith('/')) {
                    url + database;
                } else {
                    url + "/" + database
                }
                MongoClient.connect(url, options, function (err, db) {
                    if (err) reject(err);
                    resolve("Database created!");
                    db.close();
                });
            })
        },
        createCollection: function (database, collection, options) {
            return new Promise((resolve, reject) => {
                setTimeout(async () => { reject("Timeout") }, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.createCollection(collection, function (err, res) {
                        if (err) reject(err);
                        resolve("Collection created!");
>>>>>>> 76d27bbabeaa557d8184586273c2d9a3c1d60598
                        db.close();
                    });
                });
            })
        },
<<<<<<< HEAD
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
=======
        dropCollection: function (database, collection, options) {
            return new Promise((resolve, reject) => {
                setTimeout(async () => { reject("Timeout") }, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).drop(function (err, delOK) {
                        if (err) reject(err);
                        if (delOK) resolve("Collection deleted");
                        db.close();
                    });
                })
            })
        },
        find: function (database, collection, find, options) {
            return new Promise((resolve, reject) => {
                setTimeout(async () => { reject("Timeout") }, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).findOne(find, function (err, result) {
>>>>>>> 76d27bbabeaa557d8184586273c2d9a3c1d60598
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                    });
<<<<<<< HEAD
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
=======

                });
            })
        },
        sort: function (database, collection, sort, options) {
            return new Promise((resolve, reject) => {
                setTimeout(async () => { reject("Timeout") }, 5000)
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).find().sort(sort).toArray(function(err, result) {
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                      });

>>>>>>> 76d27bbabeaa557d8184586273c2d9a3c1d60598
                });
            })
        }
    }
}
