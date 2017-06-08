$(function(){
    //navigation search
    $('.navsearch .searchicon').hover(function(){
        $(this).css({boxShadow:'0px 0px 4px blue', color:'blue'});
        $('.navsearch').css({boxShadow:'none'});
    },function(){
        $(this).css({boxShadow:'none'});
        $('.navsearch').css({boxShadow:'0px 0px 4px blue'});
    })
    
    $('.navsearch').hover(function(){
        $(this).css({boxShadow:'0px 0px 4px blue'});
        $('.searchicon').css({color:'blue'});
    },function(){
        $(this).css({boxShadow:'none'});
        $('.searchicon').css({color:'black'});
    })
    
    //sign in
    var sta = false;
    $('.icon .iconthefirst').mouseover(function(){
        $('.icon .signin').fadeIn();
    })
    $('.icon .signin').hover(function(){
        sta = true;
    },function(){
        sta = false;
    })
    $('.icon .iconthefirst').mouseleave(function(){
        if(sta){
            $('.icon .signin').fadeOut();
        }
    })
    
//    $('.icon .signin').mouseover(function(){
//        
//       sta = false;
//    })
//    $('.icon .signin').mouseleave(function(){
//        sta = true;//离开
//        console.log(sta)
//    })
//    
//    $('.icon .iconthefirst').mouseleave(function(){
//        if(!sta){
//            $('.icon .signin').fadeOut();
//        }  
//    })
    
    
    //show dropdownpage
    var navindex = 0;
    function showDropdown(){
        $('.dropdownlist').stop().slideDown()
    }
    function hideDropdown(){
        $('.dropdownlist').stop().slideUp()
    }
    $('.navline li').eq(0).mouseover(function(){
        showDropdown();
        $('.dropdownlist').mouseover(function(){
            $(this).show();
        })
        $('.dropdownlist').mouseleave(function(){
            $(this).slideUp();
        })
    })
    $('navline li').eq(0).mouseleave(function(){
        hideDropdown();
    })
    
    
    //drop-down list-show arrow
    $('.withspecial').hover(function(){
        $(this).css({background:'blue',color:'white'});
        $(this).find('span').css({display:'block'});
    },function(){
        $(this).css({background:'none',color:'black'});
        $(this).find('span').css({display:'none'});
    })
    //drop-down list-show specialpage
    var sindex = 0;
    function showSpe(){
        $('.specialpage').eq(sindex).css({display:'block'}).siblings().css({display:'none'});
    }
    showSpe();
    $('.witheffects').hover(function(){
        sindex = $(this).index()-3;
        showSpe();
    },function(){
        $(this).css({color:'blue'}).siblings('.witheffects').css({color:'black'});
    })
    
    //specialpage show a-linethrough
    $('.specialpage a').hover(function(){
        $(this).css({textDecoration:'underline'});
    },function(){
        $(this).css({textDecoration:'none'});
    })
    
    //show-sidebar
    $('#soniconclick').mousedown(function(){
        $('.sidebar').fadeIn();
    })
    $('.multiplylogo').mousedown(function(){
        $('.sidebar').fadeOut();
    })
    
    $('.pluslogo').mousedown(function(){
        $(this).css({display:'none'});
        $(this).nextAll().css({display:'block'});
    })
    $('.minuslogo').mousedown(function(){
        $(this).css({display:'none'});
        $(this).prev().css({display:'block'});
        $(this).next().css({display:'none'});
    })
    
    //go to top
    $(window).scroll(function(){
        var distence = $(this).scrollTop();
        console.log(distence);
        if(distence > 500){
            $('.gototoplabel').stop().animate({right:'50px'},100);
            
        }else{
            $('.gototoplabel').stop().animate({right:'-50px'},100)
        }
        
    })
    $('.gototoplabel').click(function(){
        $(document.body).stop().animate({scrollTop:'0px'},500);
        $(this).stop().animate({right:'-50px'},300);
    })
    
    
    
})