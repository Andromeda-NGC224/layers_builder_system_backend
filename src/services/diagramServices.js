import { Diagram } from '../db/models/diagramModel.js'

export const getDiagram = async (filter) => {
  const diagram = await Diagram.findOne(filter)
  return diagram
}

export const createDiagram = async (payload) => {
  const diagram = await Diagram.create(payload)
  return diagram
}
