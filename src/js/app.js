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
        }, 100);
    });


    $(document).on('click','.bs-docs-sidenav li',function() {
        console.log("in here");
        $('.bs-docs-sidenav li').each(function(e) {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

}(window.jQuery);
