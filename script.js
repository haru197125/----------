var $btnIcon = $('#btn i')

// イベントリスナー使用

$('#btn').on('click',function(){

    // jqのメソッド
    $('body').toggleClass('open')

    // console.log($('body').hasClass('open'))

    if($('body').hasClass('open')){
        $btnIcon // $('#btn i')
        .removeClass('ri-menu-line')
        .addClass('ri-close-line')
    } else{
        $btnIcon // $('#btn i')
        .removeClass('ri-close-line')
        .addClass('ri-menu-line')
    }
})