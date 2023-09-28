// NexaTech Solutions JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Initialization message for NexaTech brand
    console.log('Welcome to NexaTech Solutions');

    // Function to load the main banner image
    function loadBannerImage() {
        // Path to the main banner image
        var bannerImagePath = "C:\\Users\\Sohail Khan\\Documents\\coder\\banner_image.jpg"; // Update the image name
        var bannerElement = document.getElementById('nexatech-banner');
        if (bannerElement) {
            // Set the source URL for the banner image
            bannerElement.src = bannerImagePath;
        }
    }

    // Function to load product images for the NexaTech gallery
    function loadProductImages() {
        // Getting the product gallery element
        var productGallery = document.getElementById('nexatech-product-gallery');
        if (productGallery) {
            // Paths for the product images located in the coding directory
            var imageList = [
                "C:\\Users\\Sohail Khan\\Documents\\coding\\product_image_1.jpg", // Update image names
                "C:\\Users\\Sohail Khan\\Documents\\coding\\product_image_2.jpg",
            ];

            // Loop over the image list and append each image to the product gallery
            imageList.forEach(function (src) {
                var img = document.createElement('img');
                img.src = src;
                productGallery.appendChild(img);
            });
        }
    }

    // Function to initialize any interactive components for NexaTech
    function initializeInteractiveComponents() {
       

    // Invoke the functions to load content 
    loadBannerImage();
    loadProductImages();
    initializeInteractiveComponents();

});
