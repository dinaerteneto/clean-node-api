import { SaveSurveyResult, LoadSurveyResult } from '@/domain/usecases'
import { mockSurveyResultModel } from '@/tests/domain'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResult.Params): Promise<LoadSurveyResult.Result> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): LoadSurveyResult => {
  class LoadSurveyResultStub implements LoadSurveyResult {
    async load (surveyId: string): Promise<LoadSurveyResult.Result> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultStub()
}
