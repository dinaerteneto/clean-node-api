import { DbLoadAnswersBySurvey } from '@/data/usecases/survey/load-answers-by-survey/db-load-answers-by-survey'
import { LoadAnsnwersBySurvey } from '@/domain/usecases/survey/load-answers-by-survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadAnswersBySurvey = (): LoadAnsnwersBySurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurvey(surveyMongoRepository)
}
