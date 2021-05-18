import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
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
