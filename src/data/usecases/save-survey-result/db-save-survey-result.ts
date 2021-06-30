import { SaveSurveyResultRepository, SaveSurveyResultModel, SurveyResultModel } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResultRepository {
  constructor (private readonly saveSurveyResulRepository: SaveSurveyResultRepository) {}

  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    return this.saveSurveyResulRepository.save(data)
  }
}
