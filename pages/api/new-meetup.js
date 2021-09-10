import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // const { title, image, address, description } = data;
        const client = await MongoClient.connect("mongodb+srv://new-user:Chotu2929@cluster0.pqa3i.mongodb.net/myMeetupsDB");
        const db = client.db();
        const meetupcollection = db.collection('myMeetupsDB');

        const result = await meetupcollection.insertOne(data);

        // console.log(result);

        client.close();

        res.status(201).json({ message: "Successfully Inserted!!" });

    }
}

export default handler;