// Select all elements with the class "accordin" within elements having the class "accordin-wrapper"
const accordions = document.querySelectorAll(".accordin-wrapper .accordin");

// Add a click event listener to each accordion element
accordions.forEach((accordion) => {
    accordion.addEventListener("click", changeAccordionState);

    // Function to handle accordion click event
    function changeAccordionState(e) {
        // Remove the "active" class from all accordion elements
        accordions.forEach((acc) => {
            acc.classList.remove("active");
        });

        // Add the "active" class to the clicked accordion element
        accordion.classList.add("active");

     
    }
});
