app.get('/index',function(req,res){
	var curIndx=req.query.index;
	var len=req.query.length;
	var data=[];
	
	for(var i=0;i<len;i++){
		data.push('新闻'+(parseInt(curIndx)+i))
	}
	res.send(data);
})