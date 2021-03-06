import { AddSurveyParams } from '@/data/usecases/survey/add-survey/db-add-survey-protocols'
import { SurveyModel } from '@/domain/models/survey'

export const mockSurveyModel = (): SurveyModel => ({
  id: 'any_id',
  question: 'any_question',
  createdAt: new Date(),
  answers: [
    { image: 'any_image', answer: 'any_answer' }
  ]
})

export const mockSurveyModels = (): SurveyModel[] => {
  return [
    {
      id: 'any_id',
      question: 'any_question',
      createdAt: new Date(),
      answers: [
        { image: 'any_image', answer: 'any_answer' }
      ]
    },
    {
      id: 'other_id',
      question: 'other_question',
      createdAt: new Date(),
      answers: [
        { image: 'other_image', answer: 'other_answer' }
      ]
    }
  ]
}

export const mockAddSurveyParams = (): AddSurveyParams => {
  return {
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    question: 'any_question',
    createdAt: new Date()
  }
}
