$(document).ready(function () {
    // Featured Products Section hover effects and animations
    $(".featured-product").hover(
        function () {
            $(this).find("img").css({
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
            });
            $(this).find(".featured-content").css({
                transition: "background 0.3s ease",
            });
            $(this).find(".btn").addClass("btn-lg");
        },
        function () {
            $(this).find("img").css({
                transform: "scale(1)",
                transition: "transform 0.3s ease",
            });
            $(this).find(".featured-content").css({
                background: "none",
                transition: "background 0.3s ease",
            });
            $(this).find(".btn").removeClass("btn-lg");
        }
    );

    $(".featured-product img").css({
        transition: "all 0.3s ease",
    });
});
