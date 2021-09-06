import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveys {
  load: () => Promise<LoadSurveys.Results>
}

export namespace LoadSurveys {
  export type Results = SurveyModel[]
}
