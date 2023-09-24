document.addEventListener("DOMContentLoaded", function(event) {
    // Initialization: Check the current theme in localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Toggle: Add an event listener to the theme toggle button
    document.querySelector("#theme-toggle").addEventListener("click", function() {
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            localStorage.removeItem("theme");
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});
