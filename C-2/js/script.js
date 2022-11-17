$(function(){
    
    //header menu -------------------------------
    $('li.lv1').mouseenter(function(){
        $(this).find('ul.lv2').stop().slideDown()
    })
    $('li.lv1').mouseleave(function(){
        $(this).find('ul.lv2').stop().slideUp()
    })
    
    //slide---------------------------------------
    $('.slide:gt(0)').hide()
    setInterval(function(){
      $('.slide:first').fadeOut(1500).next().fadeIn(1500)
      $('.slide:first').appendTo('.slideWrap')
    },3000)
    
    //popUpBox------------------------------------
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox, .popUpBg').show()
    })
    $('.popUpBox button').click(function(){
        $('.popUpBox, .popUpBg').hide()
    })
    })