import { LogControllerDecorator } from '@/main/decorators'
import { LogErrorRepository } from '@/data/protocols'
import { serverError, ok } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { mockAccountModel } from '@/tests/domain'
import { mockLogErrorRepository } from '@/tests/data/mocks'

const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle (request: any): Promise<HttpResponse> {
      return Promise.resolve(ok(mockAccountModel()))
    }
  }
  return new ControllerStub()
}

type SutTypes = {
  sut: LogControllerDecorator
  controllerStub: Controller
  logErrorRepository: LogErrorRepository
}

const makeSut = (): SutTypes => {
  const controllerStub = makeController()
  const logErrorRepository = mockLogErrorRepository()
  const sut = new LogControllerDecorator(controllerStub, logErrorRepository)
  return {
    sut,
    controllerStub,
    logErrorRepository
  }
}

const mockRequest = (): void => {}

const mockServerError = (): HttpResponse => {
  const fakeError = new Error()
  fakeError.stack = 'any_stack'
  return serverError(fakeError)
}

describe('Log Controller Decorator', () => {
  test('Should call controller handler', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest = {
      body: {
        email: 'any_mail@mail.com',
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toBeCalledWith(httpRequest)
  })

  test('Should return the same retult of the controller', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(mockAccountModel()))
  })

  test('Should return the same retult of the controller', async () => {
    const { sut, controllerStub, logErrorRepository } = makeSut()
    const logSpy = jest.spyOn(logErrorRepository, 'logError')
    jest.spyOn(controllerStub, 'handle').mockReturnValueOnce(Promise.resolve(mockServerError()))
    await sut.handle(mockRequest())
    expect(logSpy).toHaveBeenCalledWith('any_stack')
  })
})
