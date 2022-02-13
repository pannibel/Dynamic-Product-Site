
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

  document.querySelector(".purchasebox .price").textContent = product.price + " DKK";

  product.productdisplayname;
  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImage").alt = product.productdisplayname;

  document.querySelector(".subtle").textContent =
  `${product.productdisplayname} | ${product.brandname}`;
  document.querySelector(".subcategory").textContent = `Subcategory: ${product.subcategory}`;
  document.querySelector(".type").textContent = `Type: ${product.articletype}`;
  document.querySelector(".color").textContent = `Colour: ${product.basecolour}`;

  document.querySelector(".productionyear").textContent = `Production year: ${product.productionyear}`;
  }

  /* DISCOUNT */

  /*        <template class="discounttemplate">
        <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p> 
        </div>   
        </template>  */
 

  function showDiscount(product) {
    console.log(product);
    // grab the template
    const template = document.querySelector(".discounttemplate").content;
    // clone the template
    const copy = template.cloneNode(true);
  
  /*   copy
      .querySelector(".productLink")
      .setAttribute("href", `productview.html?id=${product.id}`); */

    if (product.discount > 0) {
      copy.querySelector(".discounted").classList.add("onSale");
      // copy.querySelector("span").style.display = "block";
    } else {
      copy.querySelector(".discounted").style.display = "none";
      // copy.querySelector("span").style.display = "none";
    }
  
    const newPrice = Math.round(
      product.price - (product.price / 100) * product.discount
    );
  
    copy.querySelector(".discounted p").textContent =
      "On sale for" + " " + `${newPrice}`+ " " + "DKK";
  
    //change the template content
    const parent = document.querySelector(".purchasebox");
  
    // grab parent
    parent.appendChild(copy);
  
    //append template
    }