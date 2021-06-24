import { SurveyAnswerModel } from '@/domain/models/survey'

export interface AddSurveyModel {
  answers: SurveyAnswerModel[]
  question: string
  createdAt: Date
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
