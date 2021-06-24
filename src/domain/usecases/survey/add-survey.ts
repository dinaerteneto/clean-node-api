import { SurveyAnswerModel } from '@/domain/models/survey'

export type AddSurveyModel = {
  answers: SurveyAnswerModel[]
  question: string
  createdAt: Date
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
