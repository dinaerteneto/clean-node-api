import { DbLoadAnswersBySurvey } from '@/data/usecases'
import { LoadAnsnwersBySurvey } from '@/domain/usecases'
import { SurveyMongoRepository } from '@/infra/db'

export const makeDbLoadAnswersBySurvey = (): LoadAnsnwersBySurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurvey(surveyMongoRepository)
}
