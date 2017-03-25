/**
 * Created by Administrator on 2017/3/24.
 */

(function () {
    var tTaobaoList = $(".t-list");
    var t_arrow = document.getElementById("t_arrow");
    $(".t-mytaobao").hover(function () {
        $(this).find(".t-list").show();
        // t_arrow.className = "list-top";
    }, function () {
        $(this).find(".t-list").hide();
        // t_arrow.className = "list-bottom";
    });
})();

$("#mobile").hover(function () {
    $(".tmall-app").show();

}, function () {
    $(".tamll-app").hide();
});

