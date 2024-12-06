import { Schema, model } from 'mongoose'

const diagramSchema = new Schema(
  {
    diagramName: { type: String, required: true },
    blocks: { type: Array, default: [] },
    connections: { type: Array, default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

diagramSchema.post('save', (error, data, next) => {
  // Для виправлення помилки 500 при невірних даних щодо схеми та првацює лише саме при помилці, якщо операція успішна, колбек не запуститься
  error.status = 400
  next()
})

diagramSchema.pre('findOneAndUpdate', function (next) {
  // options.new = true - повернення нового об'єкта у `res`
  this.options.new = true
  this.options.runValidators = true
  next()
})

diagramSchema.post('findOneAndUpdate', (error, data, next) => {
  error.status = 400
  next()
})

export const Diagram = model('diagram', diagramSchema)
