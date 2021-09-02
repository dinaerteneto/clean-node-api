export interface LoadAnsnwersBySurvey {
  loadAnswers: (id: string) => Promise<LoadAnsnwersBySurvey.Result>
}

export namespace LoadAnsnwersBySurvey {
  export type Result = string[]
}
