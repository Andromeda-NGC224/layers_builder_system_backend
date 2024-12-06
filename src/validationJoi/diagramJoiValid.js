import Joi from 'joi'

export const diagramAddJoiValid = Joi.object({
  diagramName: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must have at least 3 characters',
    'string.max': 'Name must have no more than 20 characters',
    'any.required': 'The Name field is required',
  }),
})
