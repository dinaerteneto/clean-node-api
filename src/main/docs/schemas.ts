import {
  errorSchema,
  loginParamsSchema,
  accountSchema,
  surveyAnswerSchema,
  surveysSchema,
  surveySchema,
  signUpParamsSchema,
  AddSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas/'

export default {
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: AddSurveyParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyAnswerSchema: surveyAnswerSchema,
  account: accountSchema,
  error: errorSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyResult: surveyResultSchema
}
