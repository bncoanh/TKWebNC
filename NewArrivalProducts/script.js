$(document).ready(function () {
    $(".product-card .card-img-top").hover(
        function () {
            $(this).css({
                transform: "scale(1.5)",
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
