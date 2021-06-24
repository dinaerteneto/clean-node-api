export type SurveyModel = {
  id: string
  question: string
  createdAt: Date
  answers: SurveyAnswerModel[]
}

export type SurveyAnswerModel = {
  image?: string
  answer: string
}
