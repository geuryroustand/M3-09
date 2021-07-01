const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8";

const eventId = new URLSearchParams(window.location.search).get("id");

const form = document.querySelector("form");

const method = eventId ? "PUT" : "POST";

// console.log(method);
const urlFetch = eventId
  ? "https://striveschool-api.herokuapp.com/api/product/" + eventId
  : "https://striveschool-api.herokuapp.com/api/product/";

const editData = async () => {
  if (eventId) {
    const response = await fetch(urlFetch, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    });

    // if (!response.ok) throw new Error("something was wrong");

    const data = await response.json();
    console.log(data);
    name: document.getElementById("name").value = data.name;
    description: document.getElementById("description").value =
      data.description;
    brand: document.getElementById("brand").value = data.brand;
    imageUrl: document.getElementById("imageUrl").value = data.imageUrl;
    price: document.getElementById("price").value = data.price;

    document.querySelector(".btn-success").textContent = " Edit";
    document.querySelector("h2").textContent = " Back office  Edit";
  }
};

const insertDataAwait = async () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const objProducts = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      imageUrl: document.getElementById("imageUrl").value,
      price: document.getElementById("price").value,
    };

    const products = Object.keys(!objProducts).every(
      (pruduct) => product !== ""
    );

    if (products) {
      console.log("dd");
    }

    try {
      const response = await fetch(urlFetch, {
        method,
        body: JSON.stringify(objProducts),
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
      });

      // if (!response.ok) console.log(await response.json());

      const danger = document.querySelector(".bg-danger ");
      if (!response.ok) throw new Error(danger.classList.remove("d-none"));

      const success = document.querySelector(".bg-success");
      // span.classList.remove("d-none");
    } catch (error) {
      console.log(error);
    }
  });
};

const delate = () => {
  if (eventId) {
    const btnDelete = document.querySelector(".btn-delete");
    btnDelete.classList.remove("d-none");

    btnDelete.addEventListener("click", async (e) => {
      e.preventDefault();
      confirm("You going to delate your the product ");
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/" + eventId,
        {
          method: "DELETE",
          headers: {
            Authorization: key,
            "Content-Type": "application/json",
          },
        }
      );
    });
  }
};

window.onload = () => {
  delate();
  insertDataAwait();
  editData();
};

// window.onload = async () => {};
