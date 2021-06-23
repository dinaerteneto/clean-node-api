export interface AddSurveyModel {
  answers: SurveyAnswer[]
  question: string
  createdAt: Date
}

export interface SurveyAnswer {
  image?: string
  answer: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
