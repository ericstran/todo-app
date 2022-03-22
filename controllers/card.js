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