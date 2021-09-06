import { SurveyResultModel } from '@/domain/models'

export interface LoadSurveyResultRepository {
  loadBySurveyId: (surveyId: String) => Promise<LoadSurveyResultRepository.Result>
}
export namespace LoadSurveyResultRepository {
  export type Result = SurveyResultModel
}
