import connectDB from '../../../middleware/mongodb'
import {
  getCardHandler
} from '../../../controllers/card'
import NextCors from 'nextjs-cors'

const cardHandler = async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

  switch(req.method) {
    case "GET":
      return getCardHandler(req, res)
    case "POST":
      return addCardHandler(req, res)
    case "DELETE":
      return removeCardHandler(req, res)
    case "PATCH":
      return updateCardHandler(req, res)
    default:
      return res.status(400).send({ok: false, message: "Request type not supported"})
  }
}

export default connectDB(cardHandler)