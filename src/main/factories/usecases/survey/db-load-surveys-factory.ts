import { DbLoadSurveys } from '@/data/usecases/survey/load-survey/db-load-surveys-protocols'
import { LoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const loadSurveyRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(loadSurveyRepository)
}
