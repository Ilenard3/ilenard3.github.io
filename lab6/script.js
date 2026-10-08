const tabs = document.querySelectorAll(".reptile-tab");
const sections = document.querySelectorAll(".reptile-section");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        const reptile = tab.getAttribute("data-reptile");

        tabs.forEach(function(button) {
            button.classList.remove("active");
        });

        sections.forEach(function(section) {
            section.classList.remove("active-section");
        });

        tab.classList.add("active");

        document
            .getElementById(reptile)
            .classList.add("active-section");
    });

});