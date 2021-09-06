import { makeSignUpValidation } from './signup-validation-factory'
import { SignUpController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbAuthentication, makeDbAddAccount } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
