import express from 'express'
import ctrlWrapper from '../utils/ctrlWrapper.js'
import {
  getAllDiagramsController,
  getDiagramByIdController,
  saveDiagramController,
  updateDiagramController,
  deleteDiagramController,
} from '../controllers/diagramController.js'
import isValidId from '../middlewares/isValidId.js'
import validateBody from '../middlewares/validateBody.js'
import {
  diagramAddJoiValid,
  diagramUpdateJoiValid,
} from '../validationJoi/diagramJoiValid.js'

const diagramRouter = express.Router()

diagramRouter.get('/', ctrlWrapper(getAllDiagramsController))

diagramRouter.get('/:id', isValidId, ctrlWrapper(getDiagramByIdController))

diagramRouter.post(
  '/',
  validateBody(diagramAddJoiValid),
  ctrlWrapper(saveDiagramController),
)

diagramRouter.patch(
  '/:id',
  isValidId,
  validateBody(diagramUpdateJoiValid),
  ctrlWrapper(updateDiagramController),
)

diagramRouter.delete('/:id', isValidId, ctrlWrapper(deleteDiagramController))

export default diagramRouter
