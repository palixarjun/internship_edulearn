document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("userForm");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Display loading message
        showLoading();

        // Wait for 3 seconds before opening the new page
        setTimeout(function() {
            // Open the new page
            window.open("nextpage.html", "_self"); // "_self" opens the page in the same tab
        }, 3000);
    });

    // Function to display loading message
    function showLoading() {
        var loadingDiv = document.createElement("div");
        loadingDiv.textContent = "Loading...";
        loadingDiv.style.position = "fixed";
        loadingDiv.style.top = "50%";
        loadingDiv.style.left = "50%";
        loadingDiv.style.transform = "translate(-50%, -50%)";
        loadingDiv.style.background = "rgba(255, 255, 255, 0.8)";
        loadingDiv.style.padding = "20px";
        loadingDiv.style.borderRadius = "10px";
        loadingDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        loadingDiv.style.zIndex = "9999";
        document.body.appendChild(loadingDiv);
    }
});
