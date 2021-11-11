const express = require("express")
const { MongoClient } = require('mongodb');
const cors = require("cors")
const app = express();

const port = process.env.PORT || 5000;
//emajhon-user
//VnE7tfOpk1GyTv6z
app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://emajhon-user:VnE7tfOpk1GyTv6z@cluster0.tgpgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {

    try {

        await client.connect();

        const database = client.db("emajhon");

        const productCollection = database.collection("DB");


        app.get("/products", async (req, res) => {

            const cursor = productCollection.find({})

            const products = await cursor.toArray()
            const count = await cursor.count()
            res.send({ products, count })
        })

        // create a document to insert

        // const doc = {

        //     title: "Record of a Shriveled Datum",

        //     content: "No bytes, no problem. Just insert a document, in MongoDB",

        // }

        const result = await usersCollection.insertOne({ name: "djhfdskf" });

        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } finally {

        // await client.close();

    }

}

run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Ema Jhon server is running")
})
app.listen(port, () => {
    console.log("running port at ", port)
})