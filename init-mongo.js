db = db.getSiblingDB('mydatabase');

db.createUser({
    user: "myuser",
    pwd: "mypassword",
    roles: [
        { role: "readWrite", db: "mydatabase" }
    ]
});

db.mycollection.insertOne({ message: "Hello from init script!" });
