let container = document.querySelector(".food");
let button = document.getElementById("submitButton");
let search = document.getElementById("textInput");

button.addEventListener("click", function(e){
  let fullUrl = "https://crossorigin.me/http://www.recipepuppy.com/api";
  e.preventDefault();
  fullUrl = `${fullUrl}/?q=${search.value}`;
  console.log(fullUrl);
  fetch(fullUrl)
  .then(function(response) {
    if(response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
      let templateHolder = "";
      data.results.forEach(function(items){
        console.log(items.title);
        let template =
        `
        <section class="stuff">
        <img src="${items.thumbnail}" alt="">
        <h1>${items.title}</h1>
        <h3>Ingredients:</h3>
        <p>${items.ingredients}</p>
        <span><a href="${items.href}">Check it out</a></span>
        </section>

        `
        templateHolder += template;
      });
      container.innerHTML = templateHolder;
      search.value = "";

    });
  });
});
