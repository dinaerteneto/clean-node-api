import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeSurveyController, makeLoadSurveysController } from '@/main/factories/controllers'
import { adminAuth } from '@/main/middlewares/admin-auth'
import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
