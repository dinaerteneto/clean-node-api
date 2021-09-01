import { Controller, HttpResponse, AddSurvey } from './add-survey-controller-protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) { }

  async handle (request: AddSurveyController.Request): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const { answers, question } = request
      await this.addSurvey.add({ answers, question, createdAt: new Date() })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddSurveyController {
  export type Request = {
    question: string
    answers: Answers[]
  }

  type Answers = {
    image?: string
    answer: string
  }
}
