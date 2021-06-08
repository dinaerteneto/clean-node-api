import { AddSurveyModel, AddSurveyRepository, DbAddSurvey } from './db-add-survey-protocols'

const makeFakeAddSurvey = (): AddSurveyModel => {
  return {
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    question: 'any_question'
  }
}

describe('DbAddSurvey UseCase', () => {
  test('Should call AddSurveyRepository with correct values', async () => {
    class AddSurveyRepositoryStub implements AddSurveyRepository {
      async add (surveyData: AddSurveyModel): Promise<void> {
        return new Promise(resolve => resolve())
      }
    }
    const addSurveyRepositoryStub = new AddSurveyRepositoryStub()
    const addSpy = jest.spyOn(addSurveyRepositoryStub, 'add')
    const dbAddSurvey = new DbAddSurvey(addSurveyRepositoryStub)
    const surveyData = makeFakeAddSurvey()
    await dbAddSurvey.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })
})
