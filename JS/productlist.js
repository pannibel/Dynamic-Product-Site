const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}



function showProduct(product) {
  console.log(product);
  // grab the template
  const template = document.querySelector("#listproducttemplate").content;
  // clone the template
  const copy = template.cloneNode(true);

  copy
    .querySelector(".productlink")
    .setAttribute("href", `product.html?id=${product.id}`);

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector(".productlink").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent =
    `${product.price}` + ",-" + " " + "DKK.";

copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;


  if (product.soldout > 0) {
    copy.querySelector("article").classList.add("soldOut");
  } else {
    copy.querySelector("article").classList.remove("soldOut");
  }

  if (product.discount > 0) {
    copy.querySelector("article").classList.add("onSale");
    // copy.querySelector("span").style.display = "block";
  } else {
    copy.querySelector(".discounted").style.display = "none";
    // copy.querySelector("span").style.display = "none";
  }

  const newPrice = Math.round(
    product.price - (product.price / 100) * product.discount
  );

  copy.querySelector(".discounted p").textContent =
    "On sale for" + " " + `${newPrice}` + ",-" + " " + "DKK.";

  //change the template content
  const parent = document.querySelector(".productlist");

  // grab parent
  parent.appendChild(copy);

  //append template
}