import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  load: (surveyId: string) => Promise<SurveyResultModel>
}

export namespace LoadSurveyResult {
  export type Result = SurveyResultModel
}
