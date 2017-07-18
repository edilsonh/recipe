let container = document.querySelector(".food");
let search = document.getElementById("textInput");
let button = document.getElementById("submitButton");
let textVal;
let url = "http://www.recipepuppy.com/api/?q="
let fullUrl = "";
submitButton.addEventListener("click", function(n){
  textVal = search.value;
  fullUrl = `${url}${searchItem}`
  return fullUrl;
});

let searchItem = textVal;
console.log(fullUrl);


fetch(fullUrl)
  .then(function(response) {
    if(response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
      console.log(data.results[0]);
      let template =
      `
      <section class="stuff">
        <img src="${data.results[0].thumbnail}">
        <h1>${data.results[0].title}</h1>
        <h3>Ingredients:</h3>
        <p>${data.results[0].ingredients}</p>
        <span><a href="${data.results[0].href}">Check it out</a></span>
      </section>
      `
      container.innerHTML = template;
    })
  })
