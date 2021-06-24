import { Controller, HttpRequest, HttpResponse, AddSurvey } from './add-survey-controller-protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { answers, question } = httpRequest.body
      await this.addSurvey.add({ answers, question, createdAt: new Date() })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
