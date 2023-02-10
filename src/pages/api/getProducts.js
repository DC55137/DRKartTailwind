import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true })

const getProducts = async (req, res) => {
  try {
    await client.connect()
    const collection = client
      .db(process.env.NEXT_PUBLIC_MONGODB_DB)
      .collection('products')
    const products = await collection.find().toArray()
    res.status(200).json({ products })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' })
    console.log(error)
  } finally {
    await client.close()
  }
}

export default getProducts
