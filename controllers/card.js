import CardModel from '../model/Card'

// get Card
export const getCardHandler = async (req, res) => {
  try {
    const result = await CardModel.find({})

    // if result not found, return error
    console.log("Card result:", result)

    if(!result) {
      // send error
      return res.status(404).send({
        ok: false,
        message: 'no entries found in database'
      });
    }

    return res.status(200).send({
      ok: true,
      message: "Card found",
      data: result
    })

  } catch(error) {
    console.log("mongoose error:", error)

    return res.status(400).send({
      ok: false,
      message: "Error getting Card: " + error.message
    })
  }
}

export const postCardHandler = async (req, res) => {
  
  const uid = req.body.uid  // required
  const title = req.body.title  // required
  const content = req.body.content  // required
  const color = req.body.color  // required
  const tags = req.body.tags  // array, not required
  const img_url = req.body.img_url  // array of objects, not required
  const timestamp = req.body.timestamp  // Date object, required

  if(!uid || !title || !content || !color || !timestamp) {
    return res.status(404).send({
      ok: false,
      message: 'missing required input'
    });
  }

  

  let newCard = {
    uid: uid,
    title: title,
    content: content
  }

  try {

    // post to mongodb atlas code

    return res.status(200).send({
      ok: true,
      message: "Card found",
      data: result
    })

  } catch(error) {
    console.log("mongoose error:", error)

    return res.status(400).send({
      ok: false,
      message: "Error posting Card: " + error.message
    })
  }
}