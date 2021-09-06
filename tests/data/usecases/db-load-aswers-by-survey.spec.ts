import { DbLoadAnswersBySurvey } from '@/data/usecases'
import { LoadSurveyByIdRepository } from '@/data/protocols'
import { mockSurveyAnswers, throwError } from '@/tests/domain'
import { mockLoadSurveyByIdRepository } from '@/tests/data/mocks'

type SutTypes = {
  sut: DbLoadAnswersBySurvey
  loadSurveyByIdRepositoryStub: LoadSurveyByIdRepository
}

const makeSut = (): SutTypes => {
  const loadSurveyByIdRepositoryStub = mockLoadSurveyByIdRepository()
  const sut = new DbLoadAnswersBySurvey(loadSurveyByIdRepositoryStub)
  return { loadSurveyByIdRepositoryStub, sut }
}

describe('LoadAnsnwersBySurvey UseCase', () => {
  test('Should call LoadSurveyRepositoryById', async () => {
    const { sut, loadSurveyByIdRepositoryStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadSurveyByIdRepositoryStub, 'loadById')
    await sut.loadAnswers('any_id')
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return a answers on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.loadAnswers('any_id')
    expect(httpResponse).toEqual(mockSurveyAnswers())
  })

  test('Should return empty array if LoadSurveyRepositoryById returns null', async () => {
    const { sut, loadSurveyByIdRepositoryStub } = makeSut()
    jest.spyOn(loadSurveyByIdRepositoryStub, 'loadById').mockImplementationOnce(null)
    const httpResponse = await sut.loadAnswers('any_id')
    expect(httpResponse).toEqual([])
  })

  test('Should throw if LoadSurveyRepositoryById throws', async () => {
    const { sut, loadSurveyByIdRepositoryStub } = makeSut()
    jest.spyOn(loadSurveyByIdRepositoryStub, 'loadById').mockImplementationOnce(throwError)
    const promise = sut.loadAnswers('any_id')
    await expect(promise).rejects.toThrow()
  })
})
