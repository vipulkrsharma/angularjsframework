!function ($) {

    $(function () {
        var $window = $(window);
        setTimeout(function () {
            $('.bs-docs-sidenav').affix({
                offset: {
                    top: function () {
                        return $window.width() <= 980 ? 290 : 210
                    }, bottom: 270
                }
            })
        }, 200);
    });


    $(document).on('click','.bs-docs-sidenav li',function() {
        console.log("in here");
        $('.bs-docs-sidenav li').each(function(e) {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

}(window.jQuery);


function scrollTo(id) {
    window.scroll(0,findPos(document.getElementById(id)));
    return false;
}
function findPos(obj) {
    var curtop = 0;
    if (obj && obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curtop];
    }
}
