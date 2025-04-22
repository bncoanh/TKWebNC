const productData = [
    {
        id: 1,
        name: "HomePod",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-20.4-min-300x300.jpg",
        newPrice: 299.99,
        oldPrice: 349.99,
        brand: "Apple",
    },
    {
        id: 2,
        name: "JBL Go 2",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-18.1-min-300x300.jpg",
        newPrice: 38.48,
        oldPrice: 49.99,
        brand: "JBL",
    },
    {
        id: 3,
        name: "NS_APMWH2",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-14.1-min-300x300.jpg",
        newPrice: 159.99,
        oldPrice: 199.99,
        brand: "Apple",
    },
    {
        id: 4,
        name: "Galaxy Tab Pro",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-10.1-min-300x300.jpg",
        newPrice: 29.99,
        oldPrice: 39.99,
        brand: "Samsung",
    },
    {
        id: 5,
        name: "Google Nest Audio",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-5.1-min-300x300.jpg",
        newPrice: 99.99,
        oldPrice: 129.99,
        brand: "Google",
    },
    {
        id: 6,
        name: "Nest X Yale Smart Lock",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-4.1-min-300x300.jpg",
        newPrice: 279.99,
        oldPrice: 299.99,
        brand: "Yale",
    },
    {
        id: 7,
        name: "Ring Stick Up Cam Battery",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-3.1-min-300x300.jpg",
        newPrice: 129.99,
        oldPrice: 149.99,
        brand: "Huawei",
    },
    {
        id: 8,
        name: "Ring Wifi Video Doorbell",
        imageUrl:
            "https://xstore.b-cdn.net/elementor3/electronic-mega-market/wp-content/uploads/sites/4/2023/11/Image-product-11.1-min-300x300.jpg",
        newPrice: 2779.99,
        oldPrice: 2999.99,
        brand: "Ring",
    },
];

$(document).ready(function () {
    // Clear loading message
    $("#product-container").empty();

    // Function to format price with currency symbol
    function formatPrice(price) {
        return "$" + price.toFixed(2);
    }

    // Loop through the product data and create HTML elements
    productData.forEach(function (product) {
        const productCard = `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="price-container">
                    <span class="new-price">${formatPrice(product.newPrice)}</span>
                    <span class="old-price">${formatPrice(product.oldPrice)}</span>
                </div>
            </div>
            <div class="product-footer">
                <button class="btn-shop-now">Shop Now</button>
            </div>
        </div>
    `;

        // Append the product card to the container
        $("#product-container").append(productCard);
    });

    // Add button click event
    $(document).on("click", ".btn-shop-now", function (e) {
        e.stopPropagation(); // Prevent triggering the product card click
        const productId = $(this)
            .closest(".product-card")
            .data("product-id");
        showProductDetail(productId);
    });

    // Add product click event to show product details
    $(document).on("click", ".product-card", function () {
        const productId = $(this).data("product-id");
        showProductDetail(productId);
    });

    // Add back button click event
    $(document).on("click", ".back-to-products", function () {
        $("#product-detail").hide();
        $("#product-listing").show();
    });

    // Add color selector click event
    $(document).on("click", ".color-option", function () {
        $(".color-option").removeClass("selected");
        $(this).addClass("selected");
        $("#selected-color").text($(this).data("color"));
    });

    // Add clear link click event
    $(document).on("click", ".clear-link", function () {
        $(".color-option").removeClass("selected");
        $("#selected-color").text("Select");
    });

    // Function to show product details
    function showProductDetail(productId) {
        // Find the product data
        const product = productData.find((p) => p.id === productId);

        if (product) {
            // Update product details
            $("#detail-product-name").text(product.name);
            $("#detail-brand").text(product.brand);
            $("#detail-price").text(formatPrice(product.newPrice));
            $("#detail-main-image").attr("src", product.imageUrl);
            $("#detail-main-image").attr("alt", product.name);

            // Generate thumbnails (using the same image 4 times as placeholder)
            $(".thumbnail-container").empty();
            for (let i = 0; i < 4; i++) {
                const thumbnailClass =
                    i === 0 ? "thumbnail active" : "thumbnail";
                const thumbnail = `
                <div class="${thumbnailClass}">
                    <img src="${product.imageUrl}" alt="${product.name}">
                </div>
            `;
                $(".thumbnail-container").append(thumbnail);
            }

            // Hide product listing and show product detail
            $("#product-listing").hide();
            $("#product-detail").show();

            // Scroll to top
            window.scrollTo(0, 0);
        }
    }

    // Add thumbnail click event
    $(document).on("click", ".thumbnail", function () {
        $(".thumbnail").removeClass("active");
        $(this).addClass("active");

        // In a real scenario, we would update the main image here
        // For this example, we're using the same image for all thumbnails
    });
});