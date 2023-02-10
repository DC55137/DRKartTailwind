import { MongoClient, ObjectId } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true })

const getProduct = async (req, res) => {
  console.log(req.query.id)
  try {
    await client.connect()
    const collection = client
      .db(process.env.NEXT_PUBLIC_MONGODB_DB)
      .collection('products')
    const product = await collection.findOne(ObjectId(req.query.id))
    res.status(200).json({ product })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job' })
    console.log(error)
  } finally {
    await client.close()
  }
}

export default getProduct
