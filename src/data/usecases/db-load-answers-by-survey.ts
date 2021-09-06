import { LoadAnsnwersBySurvey } from '@/domain/usecases/'
import { LoadSurveyByIdRepository } from '@/data/protocols'

export class DbLoadAnswersBySurvey implements LoadAnsnwersBySurvey {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadAnswers (id: string): Promise<LoadAnsnwersBySurvey.Result> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey?.answers.map(a => a.answer) || []
  }
}
