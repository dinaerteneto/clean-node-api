import { LoadSurveysRepository } from '@/data/protocols'
import { SurveyModel } from '@/domain/models'
import { LoadSurveys } from '@/domain/usecases'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveyRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    return this.loadSurveyRepository.loadAll()
  }
}
