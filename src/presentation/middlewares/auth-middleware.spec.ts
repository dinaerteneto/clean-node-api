import { forbidden } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../errors'
import { AuthMiddleware } from './auth-middleware'
import { AccountModel } from '../../domain/models/account'
import { LoadAccountByToken } from '../../domain/usecases/load-account-by-token'

const makeFakeAccount = (): AccountModel => ({
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'hashed_password'
})

describe('Auth Middleware', () => {
  test('Should return 403 if no x-access-token exists in headers', async () => {
    class LoadAccountByTokenStub implements LoadAccountByToken {
      async load (accessToken: string, role?: string): Promise<AccountModel> {
        return new Promise(resolve => resolve(makeFakeAccount()))
      }
    }
    const loadAccountTokenStub = new LoadAccountByTokenStub()
    const sut = new AuthMiddleware(loadAccountTokenStub)
    const httpResponse = await sut.handle({ headers: { 'x-access-token': 'any_token' } })
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  test('Should call LoadAccountByToken with correct accessToken', async () => {
    class LoadAccountByTokenStub implements LoadAccountByToken {
      async load (accessToken: string, role?: string): Promise<AccountModel> {
        return new Promise(resolve => resolve(makeFakeAccount()))
      }
    }
    const loadAccountTokenStub = new LoadAccountByTokenStub()
    const loadSpy = jest.spyOn(loadAccountTokenStub, 'load')
    const sut = new AuthMiddleware(loadAccountTokenStub)
    await sut.handle({ headers: { 'x-access-token': 'any_token' } })
    expect(loadSpy).toHaveBeenCalledWith('any_token')
  })
})
