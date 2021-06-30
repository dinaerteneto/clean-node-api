import { AddSurveyRepository, AddSurveyParams } from './db-add-survey-protocols'

export class DbAddSurvey implements AddSurveyRepository {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) { }

  async add (surveyData: AddSurveyParams): Promise<void> {
    await this.addSurveyRepository.add(surveyData)
  }
}
