var pageIndex = 0;
var isOver = false;
var isNewsArrive = true;
getNews();
$(window).on('scroll', checkNews);
function checkNews(){
	if(isShow($('.load-more')) && !isOver && isNewsArrive){    
		getNews();
	}
}
//加载新闻
function getNews(){
	isNewsArrive = false;
	$.get('/getNews', {page:pageIndex}).done(function(ret){
		isNewsArrive = true;
		if(ret.status === 0){
			pageIndex ++;
			appendHtml(ret.data);
			checkNews();
		}
		else {
			alert('获取新闻出错');
		}
	}).fail(function(){
		alert('系统异常');
	})
}
//拼装HTML
function appendHtml(news){
            if(news.length === 0){
                isOver = true;
                $('.container').append('<p>没有更多数据了~</p>');
                return;
            }
            var htmls = '';
            $.each(news, function(){
                htmls += '<li class="item">';
                htmls += '<a href = " ' + this.link + ' ">';
                htmls += '<div class="thumb"><img src="' + this.img + '"></div>';
                htmls += '<h2>' + this.title + '</h2>';
                htmls += '<p>' + this.brif + '</p>';
                htmls += '</a></li>';
            })
            $('.news').append(htmls);
        }

//判断是否在视线内
function isShow($node){
	var windowHeight = $(window).height(),
		scrollTop = $(window).scrollTop(),
		offsetTop = $node.offset().top,
		nodeHeight = $node.outerHeight(true);
	if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
		console.log('yes');
		return true;
	}
	else {
		return false;
	}
}