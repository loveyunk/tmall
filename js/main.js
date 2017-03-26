
    // 我的淘宝下拉列表
    $(".t-mytaobao").hover(function () {
        $(".t-mytaobao-list").show();
    }, function () {
        $(".t-mytaobao-list").hide();
    });

    // 收藏夹下拉列表
    $(".t-collect").hover(function () {
        $(".t-collect-list").show();
    }, function () {
        $(".t-collect-list").hide();
    });

    // 商业支持下拉列表
    $(".business").hover(function () {
        $(".t-business").show();
    }, function () {
        $(".t-business").hide();
    });

    // 网站导航下拉列表
    $(".website-nav").hover(function () {
        $(".website-nav-list").show();
    }, function () {
        $(".website-nav-list").hide();
    });

    // 手机版
    $("#mobile").hover(function () {
        $("#tamll-app").show();
    }, function () {
        $("#tamll-app").hide();
    });

    // 侧边导航
    $(".normal-nav").children("li").hover(function () {
        var that = $(this);
        var i = $(this).index();
        $(this).addClass("bf").addClass("color"+i).children("a").addClass("b").addClass("").addClass("color"+i);
        $(".pannel-con").eq($(this).index()).show().mouseenter(function () {
            that.addClass("bf").addClass("color"+i).children("a").addClass("b").addClass("color"+i);
            $(this).show();
        }).mouseleave(function () {
            $(this).hide();
            that.removeClass("bf").removeClass("color"+i).children("a").removeClass("b").removeClass("color"+i);
        });
    }, function () {
        var i = $(this).index();
        $(this).removeClass("bf").removeClass("color"+i).children("a").removeClass("b").removeClass("color"+i);
        $(".pannel-con").eq($(this).index()).hide();
    });

    





