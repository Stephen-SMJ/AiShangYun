
;!function(){
    //页面一打开就执行，放入ready是为了layer所需配件（css、扩展模块）加载完毕
    layer.ready(function(){
        layer.open({
            type: 2,
            title: '爱尚云科技公司宣传片',
            maxmin: true,
            area: ['70%', '90%'],
            content: 'video.html',
        });
    });
}();