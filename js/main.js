require.config({
    paths: {
        jquery: "jquery-3.2.0"
    }
});

require(['jquery'], function ($) {

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


});



