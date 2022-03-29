import mongoose from 'mongoose'

export const CardSchema = new mongoose.Schema({
    // _id: { type: ObjectId, required: true },  // card id
    uid: { type: Number, required: true },  // user id
    title: { type: String, required: true },
    content: { type: String, required: true },
    color: { type: String, required: true },    // rgb hex value
    tags: {
        type: [String],
        required: true
    },
    img_url: {
        type: [
            {
                url: { type: String }, // not URL encoded
                caption: { type: String }
            }
        ],
        required: true
    },
    timestamp: { type: Date, default: Date.now(), required: false } // Date milliseconds since epoc
})
  
export default mongoose.models.Card || mongoose.model('Card', CardSchema);