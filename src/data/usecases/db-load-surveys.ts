import { LoadSurveysRepository } from '@/data/protocols'
import { LoadSurveys } from '@/domain/usecases'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveyRepository: LoadSurveysRepository) {}

  async load (): Promise<LoadSurveys.Results> {
    return this.loadSurveyRepository.loadAll()
  }
}
