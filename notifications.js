var ebates = ebates || {};  
ebates.TOOLTIP = {classes: "absolute apotip", css: {height: "auto", top: "30px"}, overlay:{use: true, opacity: 0.05}};
ebates.OVERLAY = {classes: "fixed h-v-centered", overlay:{use: true, opacity: 0.5}};
ebates.PROGRESS = {classes: "fixed h-v-centered sortWaitBox", overlay: {use: false}};

$.showNotification = function (html, parameters, absoluteTo) {
    absoluteTo = typeof absoluteTo === "undefined" ? "body": absoluteTo;
    
    var params = $.extend({classes: "", css: {}, overlay: {use: true, opacity: 0.5}, action: function () {}, closeIn: 0, animation: 200}, parameters || ebates.OVERLAY),
        overlay = $("#backgroundPopup").length ? $("#backgroundPopup") : $('<div id="backgroundPopup"></div>').appendTo($("body")),
        dialog = $('<div></div>').addClass("dialog").appendTo($(absoluteTo)),
        offset;

    dialog.html(html).addClass(params.classes).css(params.css).fadeIn(params.animation, params.action);
    if (params.overlay.use) {
        overlay.css({opacity: params.overlay.opacity, display: "block"}).click(function () {
            overlay.stop(true, true).fadeOut(params.animation, function () {
                dialog.stop(true, true).fadeOut(params.animation).remove();
            });
        });
    }
    if (params.closeIn !== 0) {
        setTimeout(function () {
            overlay.fadeOut(params.animation/2, function () {
                dialog.fadeOut(params.animation/2).remove();
            });
        }, params.closeIn);
    }
    offset = $(absoluteTo).offset().top - $(window).scrollTop() + dialog.height() - $(window).height() + 40;
    if (offset > 0) {
        $("html, body").animate({"scrollTop": "+=" + offset}, params.animation);
    }
};
