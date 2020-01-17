class ImageController{
    static test(req,res)
      {
          res.send('image connected')
      }

    static uploadIMage(req,res)
      {
          res.status(200).json(req.body.file)
      }

    static detectImage(req, res){
      const vision = require('@google-cloud/vision');
      const client = new vision.ImageAnnotatorClient();
      const request = {
        image: {
          source: {imageUri: req.body.url}
        }
      };
      client
        .faceDetection(request)
        .then(response => {
            res.status(200).json({
              detected: response[0].faceAnnotations[0]
            })
        })
        .catch(err => {
          res.status(500).json({
            message: 'internal server error'
          })
        });
      }
}

module.exports = ImageController