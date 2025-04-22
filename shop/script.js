$(document).ready(function () {
    // Lưu tham chiếu đến các phần tử thường xuyên sử dụng
    var $bannerContainer = $(".banner-container");
    var $bannerImageContainer = $(".banner-image-container");
    var $backToTopBtn = $(".back-to-top"); // Thêm định nghĩa biến này

    // Hiệu ứng xuất hiện khi trang được load
    $bannerImageContainer.css("transform", "scale(0.9)");

    // Xác định nếu đang ở màn hình mobile
    function isMobile() {
        return $(window).width() <= 768;
    }

    // Hàm áp dụng transform dựa trên kích thước màn hình
    function applyTransform($element, scale) {
        if (isMobile()) {
            $element.css("transform", "translateX(-50%) scale(" + scale + ")");
        } else {
            $element.css("transform", "scale(" + scale + ")");
        }
    }

    // Hiệu ứng xuất hiện với timeout
    setTimeout(function () {
        $bannerImageContainer.css("transition", "transform 0.8s ease");
        applyTransform($bannerImageContainer, 1);
    }, 300);

    // Nút Back to Top
    $backToTopBtn.click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "smooth");
    });

    // Thêm hiệu ứng hover
    $bannerContainer.hover(
        function () {
            applyTransform($(this).find(".banner-image-container"), 1.1);
        },
        function () {
            applyTransform($(this).find(".banner-image-container"), 1);
        }
    );

    $(window).resize(function () {
        applyTransform($bannerImageContainer, 1);
    });
});
