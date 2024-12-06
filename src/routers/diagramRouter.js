import express from 'express'
import ctrlWrapper from '../utils/ctrlWrapper.js'
import {
  getDiagramByIdController,
  saveDiagramController,
} from '../controllers/diagramController.js'
import iasValidId from '../middlewares/isValidId.js'
import validateBody from '../middlewares/validateBody.js'
import { diagramAddJoiValid } from '../validationJoi/diagramJoiValid.js'

const diagramRouter = express.Router()

diagramRouter.get('/:id', iasValidId, ctrlWrapper(getDiagramByIdController))

diagramRouter.post(
  '/',
  validateBody(diagramAddJoiValid),
  ctrlWrapper(saveDiagramController),
)

export default diagramRouter
