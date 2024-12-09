import createHttpError from 'http-errors'
import {
  createDiagram,
  getOneDiagram,
  getAllDiagrams,
  updateDiagram,
  deleteDiagram,
} from '../services/diagramServices.js'

export const getAllDiagramsController = async (req, res) => {
  const diagrams = await getAllDiagrams()

  res.status(200).json({
    status: res.statusCode,
    message: 'Successfully found all diagrams!',
    data: diagrams,
  })
}

export const getDiagramByIdController = async (req, res) => {
  const { id } = req.params
  const diagram = await getOneDiagram({ _id: id })
  if (!diagram) {
    throw createHttpError(404, 'There is no such diagram, unfortunately')
  }
  res.status(200).json({
    status: res.statusCode,
    message: 'Successfully found diagram!',
    data: diagram,
  })
}

export const saveDiagramController = async (req, res) => {
  const diagramData = {
    diagramName: req.body.diagramName,
    blocks: req.body.blocks,
    connections: req.body.connections,
  }

  const diagram = await createDiagram(diagramData)

  res.status(201).json({
    status: res.statusCode,
    message: `Successfully created diagram!`,
    data: diagram,
  })
}

export const updateDiagramController = async (req, res) => {
  const { id } = req.params
  const updateData = { ...req.body }

  const existingDiagram = await getOneDiagram({ _id: id })
  if (!existingDiagram) {
    throw createHttpError(404, 'There is no such diagram, unfortunately')
  }

  const diagram = await updateDiagram(id, updateData)

  res.status(200).json({
    status: res.statusCode,
    message: `Successfully updated diagram!`,
    data: diagram,
  })
}

export const deleteDiagramController = async (req, res) => {
  const { id } = req.params

  const diagram = await deleteDiagram({ _id: id })

  if (!diagram) {
    throw createHttpError(404, 'There is no such diagram, unfortunately')
  }

  res.status(200).json({
    status: res.statusCode,
    message: `Successfully deleted diagram!`,
    data: diagram,
  })
}
