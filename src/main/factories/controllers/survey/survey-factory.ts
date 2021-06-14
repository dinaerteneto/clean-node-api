import { Controller } from '../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { AddSurveyController } from '../../../../presentation/controllers/survey/add-survey/add-survey-controller'
import { makeSurveyValidation } from './survey-validation-factory'
import { makeDbAddSurvey } from './add-survey/db-add-survey-factory'

export const makeSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
