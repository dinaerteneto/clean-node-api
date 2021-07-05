import { badRequest, serverError, unauthorized, notFound, forbidden } from './components/'
import { apiKeyAuthSchema } from './schemas/'

export default {
  SecuritySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
}
