$(document).ready(function () {
    // Product image gallery
    let currentImageIndex = 0;
    const totalImages = 4; // Total number of images

    // Handle thumbnail clicks
    $(".thumbnail").click(function () {
        currentImageIndex = $(this).data("index");
        updateMainImage();
    });

    // Handle navigation buttons
    $(".nav-prev").click(function () {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        updateMainImage();
    });

    $(".nav-next").click(function () {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateMainImage();
    });

    function updateMainImage() {
        // In a real application, you would change the image source
        // For this demo, we'll just log the change
        console.log("Changed to image index:", currentImageIndex);
        // Highlight active thumbnail
        $(".thumbnail").removeClass("active");
        $(`.thumbnail[data-index="${currentImageIndex}"]`).addClass("active");
    }

    // Color selection
    $(".color-option").click(function () {
        $(".color-option").removeClass("selected");
        $(this).addClass("selected");
        const color = $(this).data("color");
        $(".color-value").text(color);
    });

    // Clear color selection
    $(".clear-button").click(function () {
        $(".color-option").removeClass("selected");
        $(".color-value").text("");
    });

    // Add to cart action
    $(".add-to-cart").click(function () {
        const quantity = $(".quantity-selector").val();
        const color =
            $(".color-option.selected").data("color") || "Not selected";
        alert(`Added ${quantity} item(s) to cart. Color: ${color}`);
    });

    // Buy now action
    $(".buy-now").click(function () {
        const quantity = $(".quantity-selector").val();
        const color =
            $(".color-option.selected").data("color") || "Not selected";
        alert(`Proceeding to checkout. Quantity: ${quantity}, Color: ${color}`);
    });

    // Wishlist action
    $(".wishlist").click(function () {
        alert("Added to wishlist!");
    });

    // Compare action
    $(".compare").click(function () {
        alert("Added to compare list!");
    });
});
