$(function(){

    const $nacli = $('.nac li');//11个li
    const $item = $('.cartlist .item'); //11 块内容
    const $cartlist = $('.cartlist');//底部的框

    $nacli.on('mouseover',function(){

    $(this).addClass('active').siblings().removeClass('active');
    $item.eq($(this).index()).show().siblings('.item').hide();
   //当前和li匹配的item显示，其他的隐藏
   
    $cartlist.show();
    })

    $nacli.on('mouseout',function(){
        $cartlist.hide();
    })

    // 鼠标移入移出 $cartlist，自身显示出来。
    $cartlist.hover(() => {
        // console.log(222222);
        $cartlist.show();
    }, () => {
        // console.log(333);
        $cartlist.hide();
    })


})
 

