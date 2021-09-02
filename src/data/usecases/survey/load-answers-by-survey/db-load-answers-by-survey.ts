import { LoadAnsnwersBySurvey } from '@/domain/usecases/survey/load-answers-by-survey'
import { LoadSurveyByIdRepository } from './db-load-answers-by-survey-protocols'

export class DbLoadAnswersBySurvey implements LoadAnsnwersBySurvey {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadAnswers (id: string): Promise<LoadAnsnwersBySurvey.Result> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey?.answers.map(a => a.answer) || []
  }
}
