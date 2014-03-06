$(function() {
    $(".thumbnails").click(function(event) {
        $(this).hasClass('is-ready') ? $("#bgvid")[0].pause() : $("#bgvid")[0].play();
        if ($(this).hasClass('is-loading')) $("#bgvid")[0].pause();
    });


    $(".text-cont").mouseenter(function(event) {

        var id = this.getAttribute("related-id");
        var $videoCon = $("#" + id);
        if ($videoCon.hasClass('is-splash')) {
            $("#" + id).animate({
                    opacity: 0.5,
                },
                50, null);
            $(this).children("p").css({
                "top": "-15px",
                "opacity": 0
            }).stop().animate({
                    top: 0,
                    opacity: 1,
                },
                500, function() {
                    /* stuff to do after animation is complete */
                })
        }
    })

    $(".text-cont").mouseleave(function(event) {
        var id = this.getAttribute("related-id");
        var $videoCon = $("#" + id);
        if ($videoCon.hasClass('is-splash')) {
            $(this).children("p").stop().animate({
                    top: 15,
                    opacity: 0,
                },
                500, function(){
                	$videoCon.css("opacity","inherit");
                })
        }
    }).click(function(event) {
        var id = this.getAttribute("related-id");
        var $videoCon = $("#" + id);
        if ($videoCon.hasClass('is-splash')) {
            $(this).mouseleave();
            $videoCon.children(".fp-ui").click();
        }
    });
});
