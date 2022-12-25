const refs = {
  delay: document.querySelector("[delay]"),
  step: document.querySelector("[step]"),
  amount: document.querySelector("[amount]"),
  form: document.querySelector(".form"),
}

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) { 
  e.preventDefault();
   
    createPromise()
//   for (let position = 1; position <= refs.amount.value; position += 1) { 
//     createPromise(position, refs.delay);
  }



function createPromise() {
   console.log("Hello");
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
}
