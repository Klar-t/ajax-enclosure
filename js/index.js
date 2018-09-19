var btn=document.querySelector('#load-more'),
	ct=document.querySelector('#ct'),
	pageIndex=0,
	isDateOK=true;
	
	btn.addEventListener('click',function(){
		e.preventDefault()
		if(!isDateOK){
			return;
		}
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200||xhr.status===304){
					var results=JSON.parse(xhr.responseText);
					var fragment=document.createDocumentFragment()
					for(var i=0;i<results.length;i++){
						var node=document.createElement('li')
						var innerTest=results[i];
						fragment.appendChild(node);
					}
					ct.appendChild(fragment)
					pageIndex +=5;
				}else{
					console.log('出错了')
				}
			}
			
		}
		xhr.open('get','/index?index='+pageIndex+'&length=5',true)
		xhr.send()
	})
	