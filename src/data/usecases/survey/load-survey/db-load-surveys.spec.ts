import { LoadSurveysRepository, SurveyModel, DbLoadSurveys } from './db-load-surveys-protocols'

const makeFakeSurveys = (): SurveyModel[] => {
  return [
    {
      id: 'any_id',
      question: 'any_question',
      createdAt: new Date(),
      answers: [
        { image: 'any_image', answer: 'any_answer' }
      ]
    },
    {
      id: 'other_id',
      question: 'other_question',
      createdAt: new Date(),
      answers: [
        { image: 'other_image', answer: 'other_answer' }
      ]
    }
  ]
}

describe('DbLoadSurveys UseCase', () => {
  test('Should call LoadSurveyRepository', async () => {
    class LoadSurveyRepositoryStub implements LoadSurveysRepository {
      async loadAll (): Promise<SurveyModel[]> {
        return new Promise(resolve => resolve(makeFakeSurveys()))
      }
    }
    const loadSurveyRepositoryStub = new LoadSurveyRepositoryStub()
    const loadAllSpy = jest.spyOn(loadSurveyRepositoryStub, 'loadAll')
    const sut = new DbLoadSurveys(loadSurveyRepositoryStub)
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })
})
