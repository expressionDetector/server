const axios = require('axios')

class ShareController{
  static shareToPinterest(req, res, next){
    axios({
      method: 'POST',
      url: `https://api.pinterest.com/v1/pins/`,
      headers: {
        Authorization: `Bearer AtZuNgVm19Bz97LHYJQrdrLF-fPiFepVQobOJxpGd0kvF0C4zwjlQDAAAxVhRndJxqrApY0AAAAA`
      },
      data: {
        board: `carlhermawan/expression-detector`,
        note: `Uploaded from Expression Detector App`,
        image_url: req.body.imageUrl
      }
    })
    .then(({data}) => {
      res.status(201).json({link: data.url})
    })
    .catch((err) => {
      res.status(500).json({message: `Something wrong with Pinterest API`})
    })
  }
}

module.exports = ShareController