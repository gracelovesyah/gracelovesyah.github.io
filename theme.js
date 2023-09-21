document.addEventListener("DOMContentLoaded", function(event) {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.setAttribute("data-theme", "dark");
    }

    document.querySelector("#theme-toggle").addEventListener("click", function() {
        if (document.body.getAttribute("data-theme") == "dark") {
            document.body.removeAttribute("data-theme");
            localStorage.removeItem("theme");
        } else {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});
