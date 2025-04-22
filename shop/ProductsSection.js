$(document).ready(function() {
    $('.product-card').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.1)'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease',
                'box-shadow': 'none'
            });
        }
    );
});