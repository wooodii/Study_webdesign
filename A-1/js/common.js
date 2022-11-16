$(function(){

    // header menu
    $('header nav > ul').mouseenter(function(){
        $('ul.lv2').slideDown(800);
    })

    $('header nav > ul').mouseleave(function(){
        $('ul.lv2').stop().slideUp(500)
    })

    // slide 
    setInterval(function(){
        $('.slideWrap').animate(), function() {
            $('.slide:first').appendTo('.sliderWrap')
            $('.sliderWrap').css() 
        }
    }, 3000)

    // tab
    $('.tabMenu li').click(function () {
        // 선택된 요소의 index얻기 
        // 탭 메뉴의 li중 내가 몇번째인지 찾을 때 
        // 선택요소 index : 선택한 요소가 몇번째에 해당하는지
        // eq 선택한 요소의 인덱스 번호에 해당하는 요소를 가져옴 (숫자는 0부터, 마이너스 값이 있다면 역순)
        var idx = $(this).index()
        
        $('.tabItem>*').hide().removeClass('on')
        $('.tabItem>*').eq(idx).show().addClass('on')

        
        $('.tabMenu li').removeClass('on')
        $(this).addClass('on')
    })

    // popUpBox
    $('.notice li:nth-child(1)').click(function() {
        $('.popUpBox').show();
    })

    $('popUpBox button').click(function() {
        $('.popUpBox').hide();
    })

    
    
})