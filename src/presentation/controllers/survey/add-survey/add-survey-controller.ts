import { AddSurvey } from '../../../../domain/usecases/add-survey'
import { badRequest } from '../../../helpers/http/http-helper'
import { Validation } from '../../../protocols'
import { Controller, HttpRequest, HttpResponse } from './add-survey-controller-protocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = await this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    const { answers, question } = httpRequest.body
    await this.addSurvey.add({ answers, question })
    return new Promise(resolve => resolve(null))
  }
}