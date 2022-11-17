$(function(){
    //header menu------------------------------------
    $('header .inner >ul').mouseenter(function(){
        $('ul.lv2, .headerBg').stop().slideDown(500)
    })
    $('header .inner >ul').mouseleave(function(){
        $('ul.lv2, .headerBg').stop().slideUp(1000)
    })
    
    //slide------------------------------------
    setInterval(function(){
        $('.slideWrap').animate({'marginTop':'-300px'}, function(){
            $('.slide:first').appendTo('.slideWrap')
            $('.slideWrap').css({'marginTop':'0px'})
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