
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        const selectedPage = tab.getAttribute("data-page");

        // Remove active styles from all buttons
        tabs.forEach(function(button) {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        // Hide all reptile sections
        pages.forEach(function(page) {
            page.classList.remove("active-page");
            page.hidden = true;
        });

        // Highlight the selected sidebar button
        tab.classList.add("active");
        tab.setAttribute("aria-pressed", "true");

        // Show the selected section
        const activePage = document.getElementById(selectedPage);

        activePage.hidden = false;
        activePage.classList.add("active-page");

        // Return to the top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
