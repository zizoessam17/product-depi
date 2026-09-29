const container = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.products.forEach((product) => {
        container.innerHTML += `
       <div class="card" style="width: 18rem;">
  <img src="${product.thumbnail}" class="img card-img-top border border-dark" alt="${product.title}">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title fw-bold">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn btn-primary mt-auto align-self-start">$${product.price}</a>
  </div>
</div>`;
      });
      console.log("Products displayed.");
    })
    .catch((error) => console.error(error));
});
