import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helpers'

let accountCollection

describe('Login Routes', () => {
  beforeAll(async () => {
    console.log(process.env.MONGO_URL)
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {

    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Dinaerte Neto',
          email: 'dinaerteneto@gmail.com',
          password: 'neto123',
          passwordConfirmation: 'neto123'
        })
        .expect(200)
    })
  })

})
