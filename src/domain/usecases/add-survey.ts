export interface AddSurveyModel {
  answers: SurveyAnswer[]
  question: string
}

export interface SurveyAnswer {
  image?: string
  answer: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
