$(document).ready(function () {
    $("#news-img").hover(
        function () {
            $(this).css({
                transform: "scale(1.02)",
                transition: "transform 0.3s ease",
            });
        },
        function () {
            $(this).css({
                transform: "scale(1)",
                transition: "transform 0.3s ease",
            });
        }
    );

});