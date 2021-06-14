import { DbAddAccount } from '../../../../../data/usecases/account/add-account/db-add-account'
import { BcryptAdapter } from '../../../../../infra/criptography/bcrypt-adapter/bcrypt-adapater'
import { AccountMongoRepository } from '../../../../../infra/db/mongodb/account/account-mongo-repository'

export const makeDbAddAccount = (): DbAddAccount => {
  const salt = 12
  const bCryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bCryptAdapter, accountMongoRepository, accountMongoRepository)
}
