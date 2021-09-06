import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { LoadSurveyResultController } from '@/presentation/controllers'
import { makeDbLoadSurveyResult, makeDbLoadSurveyById } from '@/main/factories'

export const makeLoadSurveyResultController = (): Controller => {
  const controller = new LoadSurveyResultController(makeDbLoadSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}
