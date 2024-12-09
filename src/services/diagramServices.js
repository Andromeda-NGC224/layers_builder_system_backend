import { Diagram } from '../db/models/diagramModel.js'

export const getAllDiagrams = async () => {
  const totalItems = await Diagram.countDocuments()
  const diagrams = await Diagram.find()

  return { totalItems, diagrams }
}

export const getOneDiagram = async (filter) => {
  const diagram = await Diagram.findOne(filter)
  return diagram
}

export const createDiagram = async (payload) => {
  const diagram = await Diagram.create(payload)
  return diagram
}

export const updateDiagram = async (_id, payload) => {
  const diagram = await Diagram.findOneAndUpdate(
    { _id },
    { $set: payload },
    { new: true },
  )
  return diagram
}

export const deleteDiagram = async (_id) => {
  const diagrams = await Diagram.findOneAndDelete({ _id })
  return diagrams
}
