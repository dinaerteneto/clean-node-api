import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/http-helper'
import { Controller, Validation, HttpRequest, HttpResponse, Authentication } from './login-protocols'

export class LoginController implements Controller {
  private readonly validation
  private readonly authencation

  constructor (authentication: Authentication, validation: Validation) {
    this.validation = validation
    this.authencation = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const accessToken = await this.authencation.auth(email, password)
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
