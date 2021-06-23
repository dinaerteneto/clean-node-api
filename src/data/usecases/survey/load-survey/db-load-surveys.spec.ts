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

const makeLoadSurveyRepository = (): LoadSurveysRepository => {
  class LoadSurveyRepositoryStub implements LoadSurveysRepository {
    async loadAll (): Promise<SurveyModel[]> {
      return new Promise(resolve => resolve(makeFakeSurveys()))
    }
  }
  return new LoadSurveyRepositoryStub()
}

interface SutTypes {
  sut: DbLoadSurveys
  loadSurveyRepositoryStub: LoadSurveysRepository
}

const makeSut = (): SutTypes => {
  const loadSurveyRepositoryStub = makeLoadSurveyRepository()
  const sut = new DbLoadSurveys(loadSurveyRepositoryStub)
  return { loadSurveyRepositoryStub, sut }
}

describe('DbLoadSurveys UseCase', () => {
  test('Should call LoadSurveyRepository', async () => {
    const { sut, loadSurveyRepositoryStub } = makeSut()
    const loadAllSpy = jest.spyOn(loadSurveyRepositoryStub, 'loadAll')

    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })
})
