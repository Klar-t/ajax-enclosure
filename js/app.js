router.get('/getNews', function(req, res) {
  var length = req.query.length // 通过 req.query获取请求参数
  var index = parseInt(req.query.index) // 通过 req.query获取请求参数
  var result = []
  console.log(typeof(index))
  console.log(index)
  for(var i = 0;i < length ;i++){
    result.push("新闻"+(index+i+1))
  }

  res.send(result)
})