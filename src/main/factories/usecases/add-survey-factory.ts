import { DbAddSurvey } from '@/data/usecases'
import { SurveyMongoRepository } from '@/infra/db'

export const makeDbAddSurvey = (): DbAddSurvey => {
  const addSurveyRepository = new SurveyMongoRepository()
  return new DbAddSurvey(addSurveyRepository)
}
