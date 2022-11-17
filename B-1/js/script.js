$(function(){

    //header menu------------------------------------
    $('li.lv1').mouseenter(function(){
        $('ul.lv2, .headerBg').stop().slideDown()
    })
    $('li.lv1').mouseleave(function(){
        $('ul.lv2, .headerBg').stop().slideUp()
    })
    
    //slide------------------------------------
    setInterval(function(){
        $('.slideWrap').animate({'marginLeft':'-100%'}, function(){
            $('.slide:first').appendTo('.slideWrap')
            $('.slideWrap').css({'marginLeft':'0'})
        })
    },3000)
    
    //popUpBox------------------------------------
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox, .popUpBg').show()
    })
    $('.popUpBox button').click(function(){
        $('.popUpBox, .popUpBg').hide()
    })
    
    })