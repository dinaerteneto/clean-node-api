import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapater'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { LogControllerDecorator } from '../decorators/log'
import { makeSignUpValidation } from './signup-validation'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const bCryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bCryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(dbAddAccount, makeSignUpValidation())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
