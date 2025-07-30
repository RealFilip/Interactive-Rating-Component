const ratingsSpans = document.querySelectorAll('span');

let currentSpanNumber;
let currentSpanAssigned = false;
ratingsSpans.forEach( (el) => {
    el.addEventListener("click", () => {
        if (currentSpanAssigned) {
            ratingsSpans.forEach((span) => {
                if (currentSpanNumber === span.textContent) {
                    span.classList.remove("span-clicked");
                    span.classList.add("span-unclicked");
                }
            })
        }
    
        el.classList.remove("span-unclicked");
        el.classList.add("span-clicked");
        currentSpanNumber = el.textContent;
        currentSpanAssigned = true;
    })
})

// code for submission of form
const rating = document.getElementById("rating");
const ty = document.getElementById("thank-you");
const selectedRating = document.getElementById("selected-rating");

rating.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (currentSpanNumber >= 0) {
        rating.style.display = "none";
        ty.style.display = "block";
        selectedRating.textContent = `You selected ${currentSpanNumber} out of 5`;
    }
});