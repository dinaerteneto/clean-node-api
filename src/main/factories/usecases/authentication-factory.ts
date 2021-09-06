import env from '@/main/config/env'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'
import { AccountMongoRepository } from '@/infra/db'
import { DbAuthencation } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bCryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthencation(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
}
