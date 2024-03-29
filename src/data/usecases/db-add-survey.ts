import { AddSurveyRepository } from '@/data/protocols'
import { AddSurvey } from '@/domain/usecases'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) { }

  async add (surveyData: AddSurvey.Params): Promise<void> {
    await this.addSurveyRepository.add(surveyData)
  }
}
