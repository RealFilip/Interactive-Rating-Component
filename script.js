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