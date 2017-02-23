var express = require('express')

var app = express()
const PORT = process.env.PORT || 3000  //needed for heroku because need env var

app.use(function(req,res,next){  //redirect https to http traffic
  if(req.headers['x-forwarded-proto']==='https'){
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static('public'))

app.listen(PORT, function(){
  console.log('express server running on port' + PORT)
})
