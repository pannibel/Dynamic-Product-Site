
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .category").textContent =
    product.brandname + " >>";
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(".purchasebox h3").textContent =
    product.productdisplayname;
  document.querySelector(".purchasebox .brandandtype").textContent =
    product.brandname + " | " + product.productdisplayname;
  document.querySelector(".productinfo .subtle").textContent =
    product.brandname + " | " + product.productdisplayname;

  product.productdisplayname;
  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImage").alt = product.productdisplayname;

  document.querySelector(".subtle").textContent =
  `${product.articletype} | ${product.brandname}`;
  }
