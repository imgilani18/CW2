import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = "mongodb://imgilani18:Hello123@ac-hwru6wi-shard-00-00.hryrtdf.mongodb.net:27017,ac-hwru6wi-shard-00-01.hryrtdf.mongodb.net:27017,ac-hwru6wi-shard-00-02.hryrtdf.mongodb.net:27017/?ssl=true&replicaSet=atlas-gr5cmz-shard-0&authSource=admin&retryWrites=true&w=majority"
export const client = new MongoClient(uri, {
  useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1,
})

export const db = client.db(process.env.NODE_ENV || 'dev')
