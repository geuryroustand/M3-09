const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8";
const url = "https://striveschool-api.herokuapp.com/api/product/";

const row = document.querySelector(".row");
const bgImg = document.querySelector(".bg-img");

const displayProducts = (products) => {
  //   const [product] = products;

  //   const html = `

  //   <div class="col delate mt-5 data-id='${product._id}'">
  //   <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //       <h5 class="card-title"> ${product.name}</h5>
  //       <p class="card-text">${product.description}</p>
  //       <p class="card-text">${product.price} €</p>
  //       <p class="card-text">${product.brand}</p>
  //       <a href="./detail.html?productId=${product._id} " class="btn btn-primary">Buy It Now </a>

  //     </div>
  //   </div>
  // </div>

  //   `;
  //   row.insertAdjacentHTML("afterbegin", html);

  products.forEach((product) => {
    // const img = document.createElement("img");
    // img.src = product.imageUrl;
    // const image = (bgImg.style.backgroundImage = `src${product.imageUrl}`);

    const html = `
      
        <div class="col delate mt-5 data-id='${product._id}'">
        <div class="card" style="width: 18rem;">
        <img src="${product.imageUrl}" class="card-img-top " alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price} €</p>
            <p class="card-text">${product.brand}</p>
            <a href="./detail.html?productId=${product._id} " class="btn btn-primary">Buy It Now </a>
        
          </div>
        </div>
      </div>
      
        `;

    row.insertAdjacentHTML("afterbegin", html);
  });
};

// Fetching Using then

// const getData = () => {
//   fetch("https://striveschool-api.herokuapp.com/api/product/", {
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       displayProducts(data);
//       // console.log(data);
//     });
// };

// getData();

// Fetching Using await

const getDataWithAwait = async () => {
  const response = await fetch(url, {
    headers: {
      Authorization: key,
    },
  });

  const data = await response.json();
  console.log(data);
  displayProducts(data);
};

getDataWithAwait();

window.onload = () => {
  getDataWithAwait();
};

// const delateCard = (e) => {
//   console.log(e.curen);
// };
