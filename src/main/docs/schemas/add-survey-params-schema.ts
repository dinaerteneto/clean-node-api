export const AddSurveyParamsSchema = {
  type: 'object',
  properties: {
    question: { type: 'string' },
    answers: { type: 'array', items: { $: '#/schemas/surveyAnswer' } }
  }
}
