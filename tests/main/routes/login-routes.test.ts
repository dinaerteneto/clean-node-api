import request from 'supertest'
import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
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

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('neto123', 12)
      await accountCollection.insertOne({
        name: 'Dinaerte Neto',
        email: 'dinaerteneto@gmail.com',
        password
      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'dinaerteneto@gmail.com',
          password: 'neto123'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'dinaerteneto@gmail.com',
          password: 'neto123'
        })
        .expect(401)
    })
  })
})
