import Joi from 'joi'

export const diagramAddJoiValid = Joi.object({
  diagramName: Joi.string().min(3).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must have at least 3 characters',
    'any.required': 'The Name field is required',
  }),
  blocks: Joi.array().default([]).messages({
    'array.base': 'Blocks must be an array',
  }),
  connections: Joi.array().default([]).messages({
    'array.base': 'Connections must be an array',
  }),
})
