import { AddSurveyRepository, AddSurveyModel } from './db-add-survey-protocols'

export class DbAddSurvey implements AddSurveyRepository {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) { }

  async add (surveyData: AddSurveyModel): Promise<void> {
    await this.addSurveyRepository.add(surveyData)
  }
}
