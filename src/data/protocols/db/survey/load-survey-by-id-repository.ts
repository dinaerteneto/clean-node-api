import { SurveyModel } from '@/domain/models'

export interface LoadSurveyByIdRepository {
  loadById: (id: string) => Promise<LoadSurveyByIdRepository.Result>
}

namespace LoadSurveyByIdRepository {
  export type Result = SurveyModel
}
