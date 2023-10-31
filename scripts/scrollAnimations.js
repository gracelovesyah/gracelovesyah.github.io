document.addEventListener("DOMContentLoaded", function() {
    const hobbies = document.querySelectorAll(".hobby");
    const timelineItems = document.querySelectorAll(".container");
    
    function checkVisibility(items) {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);
            if (isVisible) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", function() {
        checkVisibility(hobbies);
        checkVisibility(timelineItems);
    });
});
