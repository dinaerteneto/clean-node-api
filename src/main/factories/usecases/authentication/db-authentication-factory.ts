import env from '@/main/config/env'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter/bcrypt-adapater'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter/jwt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/account-mongo-repository'
import { DbAuthencation } from '@/data/usecases/account/authentication/db-authentication'
import { Authentication } from '@/domain/usecases/account/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bCryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthencation(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
}
