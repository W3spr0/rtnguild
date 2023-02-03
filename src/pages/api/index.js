import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default async function (req, res) {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db('test');
  const collection = db.collection('test');
  const result = await collection.findOne({});
  res.status(200).json(result);
};