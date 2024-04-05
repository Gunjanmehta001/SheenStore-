

document.getElementById("searchButton").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    if (searchInput === "women clothes") {
        window.location.href = "womenscollection.html";
    } else if (searchInput === "men clothes") {
        window.location.href = "menscollection.html";
    } else {
        alert("Sorry, only 'women clothes' or 'men clothes' can be searched.");
        // Optionally, you can redirect to a different page for other queries
        // window.location.href = "otherpage.html";
    }
});
