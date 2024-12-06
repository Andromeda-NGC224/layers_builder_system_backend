import createHttpError from 'http-errors'
import { createDiagram, getDiagram } from '../services/diagramServices.js'

export const getDiagramByIdController = async (req, res) => {
  const { id } = req.params
  const diagram = await getDiagram({ _id: id })
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

  console.log(req.body)

  const diagram = await createDiagram(diagramData)

  res.status(201).json({
    status: res.statusCode,
    message: `Successfully created diagram!`,
    data: diagram,
  })
}
