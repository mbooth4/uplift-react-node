// Import the express server
const express = require('express');
const cors = require('cors');

// Create a new "express" application
const app = express();
app.use(cors());

// Allow Express to accept JSON body data in a POST request
app.use(express.json());

const Datastore = require('nedb');
const db = new Datastore({ 
    filename: 'database',
    autoload: true
});

 

// Import our ITEMS from a new file
const ITEMS = require('./items');

// Serve our items
app.get("/items", (req, res) => {
    res.json(ITEMS);
});

const CATEGORIES = [{ name: 'All' }, { name: 'Drink' }, { name: 'Food' }, { name: 'Toys' }];
app.get("/categories", (req, res) => {
    res.json(CATEGORIES);
});

app.get("/orders", (req, res) => {
    db.findOne({_id: "orders"}, (err, doc) => {
        if (doc) {
            res.json(doc.orders);
        } else {
            res.json([]);
        }
    });
});

// upsert = UPdate + inSERT
app.post("/orders", (req, res) => {
    db.update(
        { _id: "orders"},
        { _id: "orders", orders: req.body },
        { upsert: true },
        (err, numberOfUpdate, upsert) => {
            res.send("Done");
        }
    );
});


// Listen to the route "/" and then handle it
// req is requests
// res is response
app.get("/", (req, res) => {
    res.send("Hello, World!");
});



const portNumber = 3000;
// Start listening to HTTP requests on our port
app.listen(portNumber, () => {
    console.log(`Server is listening on http://localhost:${portNumber}/`);
});