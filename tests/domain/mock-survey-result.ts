import { LoadSurveyResult, SaveSurveyResult } from '@/domain/usecases'

export const mockSaveSurveyResultParams = (): SaveSurveyResult.Params => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): LoadSurveyResult.Result => ({
  surveyId: 'any_id',
  question: 'any_question',
  createdAt: new Date(),
  answers: [
    {
      image: 'any_image',
      answer: 'any_answer',
      count: 0,
      percent: 0
    },
    {
      answer: 'other_answer',
      image: 'any_image',
      count: 0,
      percent: 0
    }
  ]
})
