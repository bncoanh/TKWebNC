$(document).ready(function () {
    $(".category-item").hover(
        function () {
            // Mouse enter
            $(this).find(".category-icon i").addClass("text-primary");
            $(this).find("h6").addClass("text-primary");
        },
        function () {
            // Mouse leave
            $(this).find(".category-icon i").removeClass("text-primary");
            $(this).find("h6").removeClass("text-primary");
        }
    );
});
