import {
  SaveSurveyResultRepository,
  SaveSurveyResultParams,
  SurveyResultModel,
  SaveSurveyResult,
  LoadSurveyResultRepository
} from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResulRepository: SaveSurveyResultRepository,
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository
  ) { }

  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    await this.saveSurveyResulRepository.save(data)
    return this.loadSurveyResultRepository.loadBySurveyId(data.surveyId)
  }
}
