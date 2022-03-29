import { findDOMNode } from 'react-dom';
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

// post Card
/************************************************
 * pull inputs expected from request body.      *
 * check falsy inputs (allow empty string "").  *
 * construct new object.                        *
 * construct new class object.                  *
 * save the class object to atlas               *
 ************************************************/
export const postCardHandler = async (req, res) => {
  
  const uid = req.body.uid  // required, String
  const title = req.body.title  // required, String , may be empty quotes
  const content = req.body.content  // required, String , may be empty quotes
  const color = req.body.color  // required, String , may be empty quotes
  const tags = req.body.tags  // required, array of strings
  const img_url = req.body.img_url  // required, array of {url:String, caption:String} objects

  // console.log("uid: ",uid)
  // console.log("title: ",title)
  // console.log("content: ",content)
  // console.log("color: ",color)
  // console.log("tags: ",tags)
  // console.log("img_url: ",img_url)
  // console.log("\n")
  
  // falsey input checking
  if(!uid || (!title && title!="") || (!content && content!="") || (!color && color!="") || !tags || !img_url) {
    return res.status(400).send({
      ok: false,
      message: 'Bad input'
    })
  }

  // construct new object
  const newCard = {
    uid: uid,
    title: title,
    content: content,
    color: color,
    tags: tags,
    img_url: img_url,
  }

  // mongoose posting attempt
  try {
    // construct class object
    const result = new CardModel(newCard)
    // save to atlas
    await result.save()
    
    // success!
    return res.status(200).send({
      ok: true,
      message: "Card created and posted!",
      data: result
    })

  } catch(error) {
    console.log("server error: ", error)

    return res.status(500).send({
      ok: false,
      message: "Unknown error while posting Card: " + error.message
    })
  }
}