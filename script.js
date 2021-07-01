const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8";

const form = document.querySelector("form");

// const getDataFromTheUser = () => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const obj = {
//       name: document.getElementById("name").value,
//       description: document.getElementById("description").value,
//       brand: document.getElementById("brand").value,
//       imageUrl: document.getElementById("imageUrl").value,
//       price: document.getElementById("price").value,
//     };

//     fetch("https://striveschool-api.herokuapp.com/api/product/", {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8",
//         "Content-Type": "application/json",
//       },
//     });
//   });
// };
// getDataFromTheUser();

// window.onload = () => {};

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

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        {
          method: "POST",
          body: JSON.stringify(objProducts),
          headers: {
            "Content-Type": "application/json",
            Authorization: key,
          },
        }
      );

      const danger = document.querySelector(".bg-danger ");
      if (!response.ok) throw new Error(danger.classList.remove("d-none"));

      const success = document.querySelector(".bg-success");
      span.classList.remove("d-none");
    } catch (error) {
      console.log(error);
    }
  });
};

insertDataAwait();

// window.onload = async () => {};
