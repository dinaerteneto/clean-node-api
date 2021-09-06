import { DbAddAccount } from '@/data/usecases'
import { BcryptAdapter } from '@/infra/cryptography'
import { AccountMongoRepository } from '@/infra/db'

export const makeDbAddAccount = (): DbAddAccount => {
  const salt = 12
  const bCryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bCryptAdapter, accountMongoRepository, accountMongoRepository)
}
