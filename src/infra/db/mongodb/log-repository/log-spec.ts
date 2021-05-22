import { Collection } from 'mongodb'
import { LogErrorRepository } from '../../../../data/protocols/log-error-repository'
import { MongoHelper } from '../helpers/mongo-helpers'
import { LogMongoRepository } from './log'

const makeSut = (): LogErrorRepository => {
  return new LogMongoRepository()
}

describe('Log Mongo Repository', () => {
  let errorCollection: Collection

  beforeAll(async () => {
    console.log(process.env.MONGO_URL)
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  test('Should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})