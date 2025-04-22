$(document).ready(function () {
    // Back to Top Button
    const $backToTopBtn = $("#back-to-top");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $backToTopBtn.show();
        } else {
            $backToTopBtn.hide();
        }
    });

    $backToTopBtn.click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "smooth");
    });

    // Initialize Bootstrap Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Product Filter buttons
    $(".product-filter .btn").click(function () {
        $(".product-filter .btn").removeClass("active");
        $(this).addClass("active");
    });

    // Simple countdown timer (for demonstration)
    let countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 2);

    // Update the countdown every 1 second
    const countdownTimer = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        $(".countdown-number").each(function (index) {
            switch (index) {
                case 0:
                    $(this).text(days < 10 ? "0" + days : days);
                    break;
                case 1:
                    $(this).text(hours < 10 ? "0" + hours : hours);
                    break;
                case 2:
                    $(this).text(minutes < 10 ? "0" + minutes : minutes);
                    break;
                case 3:
                    $(this).text(seconds < 10 ? "0" + seconds : seconds);
                    break;
            }
        });

        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(countdownTimer);
        }
    }, 1000);
});
