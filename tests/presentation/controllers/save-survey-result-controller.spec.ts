import { LoadSurveyById, SaveSurveyResult } from '@/domain/usecases'
import { SaveSurveyResultController } from '@/presentation/controllers'
import { forbidden, serverError, ok } from '@/presentation/helpers/http/http-helper'
import { mockSurveyResultModel } from '@/tests/domain'
import { InvalidParamError } from '@/presentation/errors'
import { mockLoadSurveyById, mockSaveSurveyResult } from '@/tests/presentation/mocks'
import MockDate from 'mockdate'

const mockRequest = (answer: string = null): SaveSurveyResultController.Request => ({
  surveyId: 'any_survey_id',
  accountId: 'any_account_id',
  answer: answer || 'any_answer'
})

type SutTypes = {
  sut: SaveSurveyResultController
  loadSurveyByIdStub: LoadSurveyById
  saveSurveyResultStub: SaveSurveyResult
}

const makeSut = (): SutTypes => {
  const saveSurveyResultStub = mockSaveSurveyResult()
  const loadSurveyByIdStub = mockLoadSurveyById()
  const sut = new SaveSurveyResultController(loadSurveyByIdStub, saveSurveyResultStub)
  return { sut, loadSurveyByIdStub, saveSurveyResultStub }
}

describe('SaveSurveyResult Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call LoadSurveyById with correct values', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(mockRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should return 403 if LoadBySurveyById return null', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    jest.spyOn(loadSurveyByIdStub, 'loadById').mockReturnValueOnce(Promise.resolve(null))
    const response = await sut.handle(mockRequest())
    await sut.handle(mockRequest())
    expect(response).toEqual(forbidden(new InvalidParamError('surveyId')))
  })

  test('Should return 500 if LoadBySurveyById throws', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    jest.spyOn(loadSurveyByIdStub, 'loadById').mockImplementationOnce(() => {
      throw new Error()
    })
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  })

  test('Should return 403 if an invalid answer is provided', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(mockRequest('invalid_answer'))
    expect(response).toEqual(forbidden(new InvalidParamError('answer')))
  })

  test('Should call SaveSurveyResult with correct values', async () => {
    const { sut, saveSurveyResultStub } = makeSut()
    const saveSpy = jest.spyOn(saveSurveyResultStub, 'save')
    await sut.handle(mockRequest())
    expect(saveSpy).toHaveBeenCalledWith({
      surveyId: 'any_survey_id',
      accountId: 'any_account_id',
      answer: 'any_answer',
      date: new Date()
    })
  })

  test('Should return 500 if SaveSurveyResult throws', async () => {
    const { sut, saveSurveyResultStub } = makeSut()
    jest.spyOn(saveSurveyResultStub, 'save').mockImplementationOnce(() => {
      throw new Error()
    })
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  })

  test('Should return 200 if success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(ok(mockSurveyResultModel()))
  })
})
