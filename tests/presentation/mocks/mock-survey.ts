import { SurveyModel } from '@/domain/models'
import { AddSurvey, LoadSurveyById, LoadSurveys } from '@/domain/usecases'
import { mockSurveyModel, mockSurveyModels } from '@/tests/domain'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurvey.Params): Promise<void> {
      return Promise.resolve(null)
    }
  }
  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveyStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return Promise.resolve(mockSurveyModels())
    }
  }

  return new LoadSurveyStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return Promise.resolve(mockSurveyModel())
    }
  }
  return new LoadSurveyByIdStub()
}
