import { SaveSurveyResultRepository, LoadSurveyResultRepository } from '@/data/protocols'
import { SaveSurveyResult } from '@/domain/usecases'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResulRepository: SaveSurveyResultRepository,
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository
  ) { }

  async save (data: SaveSurveyResult.Params): Promise<SaveSurveyResult.Result> {
    await this.saveSurveyResulRepository.save(data)
    return this.loadSurveyResultRepository.loadBySurveyId(data.surveyId)
  }
}
