// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const todoCard = {
  id: 1,
  title: 'Test Card',
  content: 'Nothin\' much to see here... just a test'
}

export default function handler(req, res) {
  res.status(200).json(todoCard)
}
