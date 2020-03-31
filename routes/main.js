const express = require('express')
const router = express.Router()

router.get('/', index)
router.get('/provinsi/', provinsi)

function index(req, res){
  const listDaerah = ["provinsi", "kabupaten"]
  const output = [{"status_code" : 200}]
  const data = []
  let baseUrl = req.headers.host + '/'
  listDaerah.forEach(function(daerah, index){
    data.push({
      "daerah" : daerah,
      "url" : baseUrl + daerah + "/"
    })
  })

  output.push({"data" : data})
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(output))
}

function provinsi(req, res){
  const listProvinsi = ["jawa timur", "jawa barat"]
  const output = [{"status_code" : 200}]
  const data = []
  let baseUrl = req.headers.host + '/'

  listProvinsi.forEach(function(provinsi, index){
    data.push({
      "namaProvinsi" : provinsi,
      "url" : baseUrl + "provinsi/" + provinsi.replace(" ", "-")
    })
  })

  output.push({"data" : data})
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(output))
}

module.exports = router