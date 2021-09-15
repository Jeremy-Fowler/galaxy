import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema(
  {
    name: { type: String, required: true },
    PlanetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
