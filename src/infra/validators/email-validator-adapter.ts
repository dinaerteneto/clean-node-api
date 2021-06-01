import validator from 'validator'
import { EmailValidator } from '../../validation/protocols/email-validator'
export class EmailValidatorAdpater implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
