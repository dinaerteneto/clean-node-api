export interface SurveyModel {
  id: string
  question: string
  createdAt: Date
  answers: SurveyAnswerModel[]
}

export interface SurveyAnswerModel {
  image?: string
  answer: string
}
