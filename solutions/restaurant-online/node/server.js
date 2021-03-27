const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const Datastore = require('nedb');
const db = new Datastore({ filename: 'database', autoload: true });


const items = require("./items");

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/items", (req, res) => {
    res.json(items);
});

app.get("/orders", (req, res) => {
    db.findOne({ _id: "orders" }, (err, doc) => {
        res.json(doc ? doc.orders : []);
    });
});


app.put("/orders", (req, res) => {
    db.update(
        { _id: "orders" },
        { _id: "orders", orders: req.body },
        { upsert: true },
        (err, doc) => {
            res.json(doc ? doc.orders : [])
        });
});

app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
})