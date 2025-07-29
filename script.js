const ratingSpans = document.querySelectorAll('span');


/* Luis' function to obatined user rating*/
const getRating = (obtainedRating)=>{
  ratingSpans.forEach((span)=>{

    span.addEventListener('click',(e)=>{
     let userRating = e.target.textContent ;
     let target = e.target

     obtainedRating(userRating);
    })
  })
}



