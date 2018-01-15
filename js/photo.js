$(function(){
    let index = 0;
    let Lbtn = $('.Lbtn'),Rbtn = $('.Rbtn'),
        box = $('.photo'),
        Bphoto = $('.photo > img'),
        lis = $('.photoList li'),
        lisL = $('.LLbtn'),lisR = $('.LRbtn'),
        ul = $('.photoList > ul'),
        liw = lis.outerWidth() * 6,
        piece = 0,
        maxT = 0;
    ul.width(lis.outerWidth() * lis.length);
    maxT = ul.width() - $('.photoList').width();
    console.log(lis.outerWidth(),lis.length,ul.width(),maxT)
    //放大
    box.dblclick(function(){
        Bphoto.addClass('hot');
    })
    Bphoto.click(function(){
        $(this).removeClass('hot');
        //console.log($(this))
    })
    //大小图片关联
    lis.click(function(){
        lis.not($(this)).removeClass('active');
        $(this).addClass('active');
        let src = $(this).children('img').attr('src');
        Bphoto.attr('src',src);
        index = lis.index($(this));
    })
    //大图左右按钮
    Lbtn.click(function(){
        index--;
        if(index <= 0){
            index = lis.length-1;
            piece = lis.length/6;
        }
        //console.log(index);
        lis.removeClass('active').eq(index).addClass('active');
        let src = lis.eq(index).children('img').attr('src');
        Bphoto.attr('src',src);
        if(index % 6 == 5){
            lisL.triggerHandler('click');
        }
    })
    Rbtn.click(function(){
        index++;
        if(index == lis.length){
            index = -1;
            piece = -1;
        }
        //console.log(index);
        lis.removeClass('active').eq(index).addClass('active');
        let src = lis.eq(index).children('img').attr('src');
        Bphoto.attr('src',src);
        if(index %  6 == 0){
            lisR.triggerHandler('click');
        }
    })
    //小图左右按钮
    lisL.click(function(){
        if(-liw * piece >= 0){
            piece=lis.length/6;
        }
        piece--;
        ul.css({transform:`translateX(${-liw*piece}px`});
    })
    lisR.click(function(){
        if(-liw * piece <= -maxT){
            piece=-1;
        }
        piece++;
        ul.css({transform:`translateX(${-liw*piece}px`});
    })

})