import { loginPath, surveyPath, signupPath } from './paths'
import {
  errorSchema,
  loginParamsSchema,
  accountSchema,
  surveyAnswerSchema,
  surveysSchema,
  surveySchema,
  apiKeyAuthSchema,
  signUpParamsSchema
} from './schemas'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node Api',
    description: 'Api do curso do mango pra realizar enquete entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0.html'
  },
  servers: [
    { url: '/api' }
  ],
  tags: [
    { name: 'Login' },
    { name: 'Enquete' }
  ],
  paths: {
    '/login': loginPath,
    '/signup': signupPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswerSchema: surveyAnswerSchema,
    signUpParamsSchema: signUpParamsSchema
  },
  components: {
    SecuritySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }

}
