import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true })

const getHighestNumber = async (req, res) => {
  try {
    await client.connect()
    const collection = client
      .db(process.env.NEXT_PUBLIC_MONGODB_DB)
      .collection('jobs')
    const highestNumber = await collection.findOne({}, { sort: { number: -1 } })
    res.status(200).json({ highestNumber: highestNumber.number })
  } catch (error) {
    res.status(500).json({ error: error.message })
  } finally {
    client.close()
  }
}

export default getHighestNumber
