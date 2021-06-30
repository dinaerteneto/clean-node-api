import { SaveSurveyResultRepository } from '@/data/protocols/db/survey/save-survey-result-repository'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultModel } from '@/domain/usecases/survey/save-survey-result'
import { MongoHelper } from '../helpers/mongo-helpers'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyCollection = await MongoHelper.getCollection('surveyResults')
    const res = await surveyCollection.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        createdAt: data.createdAt
      }
    }, {
      upsert: true,
      returnOriginal: false
    })

    return res.value && MongoHelper.map(res.value)
  }
}
