import { AddSurvey, AddSurveyRepository } from './db-add-survey-protocols'

export class DbAddSurvey implements AddSurveyRepository {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) { }

  async add (surveyData: AddSurvey.Params): Promise<void> {
    await this.addSurveyRepository.add(surveyData)
  }
}
