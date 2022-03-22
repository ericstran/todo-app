import mongoose from 'mongoose'

export const CardSchema = new mongoose.Schema({
    cid: { type: Number },  // card id
    uid: { type: Number },  // user id
    title: { type: String },
    content: { type: String },
    color: { type: String },    // rgb value
    tags: [ String ],
    img_url: [
        {
            url: { type: String }, // not URL encoded
            caption: { type: String }
        }
    ],
    timestamp: { type: Number } // Date milliseconds since epoc
})
  
export default mongoose.models.Card || mongoose.model('Card', CardSchema);