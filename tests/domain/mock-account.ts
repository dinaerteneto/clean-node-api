import { AccountModel } from '@/domain/models/account'
import { AddAccount, Authentication } from '@/domain/usecases'

export const mockAddAccountParams = (): AddAccount.Params => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), { id: 'any_id' })

export const mockAuthentication = (): Authentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
