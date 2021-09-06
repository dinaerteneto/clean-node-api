import { makeSurveyValidation } from './add-survey-validation-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbAddSurvey } from '@/main/factories/usecases'
import { AddSurveyController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
