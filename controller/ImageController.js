class ImageController{
    static test(req,res)
      {
          res.send('image connected')
      }

    static uploadIMage(req,res)
      {
          res.status(200).json(req.body.file)
      }


}

module.exports = ImageController