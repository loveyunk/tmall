// 我的淘宝 收藏夹 商家支持 网站导航
$('.tools-menu-link').parent().hover(function () {
    $(this).children('.tools-menu-link').addClass('tools-menu-link-hover');
    $(this).children('.tools-menu-pane').show();
}, function () {
    $(this).children('.tools-menu-link').removeClass('tools-menu-link-hover');
    $(this).children('.tools-menu-pane').hide();
});

// 顶部手机版鼠标经过二维码图片出现
$('.tools-menu-mobile').hover(function () {
    $(this).children('.tools-menu-twoCode').show();
}, function () {
    $(this).children('.tools-menu-twoCode').hide();
});

// 刚进入页面头部搜索框获得焦点
$(document).ready(function () {
    $('.header-search-input').focus();
});

// 主导航鼠标经过天猫头出现
$('.main-nav').children('li').hover(function () {
    $(this).find('.nav-hoverPic').stop().animate({
        top: '-10px'
    }, 200);
}, function () {
    $(this).find('.nav-hoverPic').stop().animate({
        top: '0'
    }, 200);
});

// 右侧边栏
$('.rightSidebar-sub').hover(function () {
    $(this).children('.rightSidebar-tip').stop(true, false).delay(200).show().animate({
        opacity: 1,
        right: '35px'
    }, 400);
}, function () {
    $(this).children('.rightSidebar-tip').stop(true, false).animate({
        opacity: 0,
        right: '65px'
    }, 400).hide(50);
});

// 右侧边框二维码
$('.rightSidebar-app').hover(function () {
    $('.rightSidebar-app-twoCode').show();
}, function (e) {
    $('.rightSidebar-app-twoCode').hide();
});

// 返回顶部
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.rightSidebar-backTop').css('visibility', 'visible');
    } else {
        $('.rightSidebar-backTop').css('visibility', 'hidden');
    }
});

$('.rightSidebar-backTop, .leftSidebar-backTop').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);

    return false;
});

// 左侧边导航栏,头部
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 560) {
        $('.leftSidebar').show(300);
        $('.attachHeader').slideDown(300);
    } else {
        $('.leftSidebar').hide(300);
        $('.attachHeader').slideUp(300);
    }
});

$(window).on('scroll', function () {
    // console.log($('.aa').position().top);
});

// 侧边导航
(function () {

    var sub = $('.category-content');

    var activeRow;
    var activeMenu;

    var timer;

    var mouseInSub = false;

    sub.on('mouseenter', function () {
        mouseInSub = true;
    }).on('mouseleave', function () {
        mouseInSub = false;
    });

    var mouseTrack = [];

    var moveHandler = function (e) {
        mouseTrack.push({
            x: e.pageX,
            y: e.pageY
        });

        if (mouseTrack.length > 3) {
            mouseTrack.shift();
        }
    };

    $('.category-con').on('mouseenter', function () {
        sub.removeClass('dn');
        $(document).bind('mousemove', moveHandler);
    }).on('mouseleave', function () {
        sub.addClass('dn');

        if (activeRow) {
            activeRow.removeClass('active');
            activeRow = null;
        }

        if (activeMenu) {
            activeMenu.addClass('dn');
            activeMenu = null;
        }

        $(document).unbind('mousemove', moveHandler);

    }).children('.normal-nav').on('mouseenter', 'li', function (e) {
        var index = $(this).index();
        if (!activeRow) {
            activeRow = $(e.target).addClass('active');
            // activeRow.addClass('color'+index).children('a').addClass('color'+index);
            activeMenu = $('#' + activeRow.data('id'));
            activeMenu.removeClass('dn');
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        var currMousePos = mouseTrack[mouseTrack.length - 1];
        var leftCorner = mouseTrack[mouseTrack.length - 2];

        var delay = needDelay(sub, leftCorner, currMousePos);

        if (delay) {
            timer = setTimeout(function () {

                if (mouseInSub) {
                    return;
                }

                activeRow.removeClass('active');
                // activeRow.removeClass('color'+index).children('a').removeClass('color'+index);
                activeMenu.addClass('dn');

                activeRow = $(e.target);
                activeRow.addClass('active');
                activeMenu = $('#' + activeRow.data('id'));
                activeMenu.removeClass('dn');
                timer = null;
            }, 300);
        } else {
            var prevActiveRow = activeRow;
            var prevActiveMenu = activeMenu;

            activeRow = $(e.target);
            activeMenu = $('#' + activeRow.data('id'));

            prevActiveRow.removeClass('active');
            prevActiveMenu.addClass('dn');

            activeRow.addClass('active');
            activeMenu.removeClass('dn');
        }

    });
})();


// $(".normal-nav").children("li").hover(function () {
//     var that = $(this);
//     var i = $(this).index();
//     $(this).addClass("bf").addClass("color" + i).children("a").addClass("b").addClass("").addClass("color" + i);
//     $(".pannel-con").eq($(this).index()).show().mouseenter(function () {
//         that.addClass("bf").addClass("color" + i).children("a").addClass("b").addClass("color" + i);
//         $(this).show();
//     }).mouseleave(function () {
//         $(this).hide();
//         that.removeClass("bf").removeClass("color" + i).children("a").removeClass("b").removeClass("color" + i);
//     });
// }, function () {
//     var i = $(this).index();
//     $(this).removeClass("bf").removeClass("color" + i).children("a").removeClass("b").removeClass("color" + i);
//     $(".pannel-con").eq($(this).index()).hide();
// });

// banner
$('.banner-sliderNav > li').mouseenter(function () {
    var $index = $(this).index();
    $('.banner-images').children('img').fadeOut(600).eq($index).fadeIn(600);
    $(this).parent().children().removeClass('select');
    $(this).addClass('select');
});

function run() {
    var i = 0;
    setInterval(function () {
        i = i % 5;
        i++;
        $('.banner-sliderNav > li').eq(i - 1).trigger('mouseenter');
    }, 6000);
}

run();

// leftSidebar
$('.leftSidebar > a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
});

















