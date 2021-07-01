const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8";
const url = "https://striveschool-api.herokuapp.com/api/product/";

const row = document.querySelector(".row");
const bgImg = document.querySelector(".bg-img");

const displayProducts = (products) => {
  console.log(products);

  products.forEach((product) => {
    // console.log(product);

    const html = `
      
        <div class="col delate mt-5 data-id='${product._id}'">
        <div class="card" style="width: 18rem;">
        <img src="${product.imageUrl}" class="card-img-top " alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price} €</p>
            <p class="card-text">${product.brand}</p>
            <a href="./detail.html?productId=${product._id} " class="btn btn-primary">View Product </a>
        
          </div>
        </div>
      </div>
      
        `;

    row.insertAdjacentHTML("afterbegin", html);
  });
};

const getDataWithAwait = async () => {
  const response = await fetch(url, {
    headers: {
      Authorization: key,
    },
  });

  const data = await response.json();
  // console.log(data);
  displayProducts(data);
};

window.onload = () => {
  getDataWithAwait();
};
