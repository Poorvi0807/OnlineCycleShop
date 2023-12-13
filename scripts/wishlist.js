let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
let cartData = JSON.parse(localStorage.getItem("cart-list")) || [];
let addedToCartData = JSON.parse(localStorage.getItem("added-to-cart")) || [];

let WishlistProducts = document.getElementById("WishlistItemsTable");

const displayData = (data) => {
  WishlistProducts.innerHTML = "";
  data.map((ele, index) => {

    console.log(ele);



    let row = document.createElement("div");
    row.setAttribute("id", "row");

    let img = document.createElement("img");
    // img.src = ele.image;
    img.src=ele.large_img;
    img.setAttribute("class", "WishlistImage");

    let col2 = document.createElement("div");
    col2.setAttribute("id", "secondDiv");

    let innDiv = document.createElement("div");
    let Title = document.createElement("p");
    Title.innerText = ele.title;
    Title.setAttribute("id", "WishlistTitle");
    Title.setAttribute("class", "WishlistHover");
    let desc = document.createElement("p");
    desc.innerText = "popularity";
    desc.setAttribute("class", "WishlistHover");
    let itemCode = document.createElement("p");
    let code = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
    itemCode.innerText = `ITEM 1234`;
    itemCode.style.color = "#666666";
    itemCode.style.fontSize = "1.3vh";

    innDiv.append(Title, desc, itemCode);
    let div = document.createElement("div");
    div.setAttribute("id", "btnForWishList");

    col2.append(innDiv, div);

    let col3 = document.createElement("div");
    col3.setAttribute("id", "thirdDiv");

    let Price = document.createElement("p");
    Price.innerText = `₹ ${ele.price}`;

    col3.append(Price);

    let col4 = document.createElement("div");
    col4.setAttribute("id", "WishlistBtns");
    let addToCartListBtn = document.createElement("button");
    let isInCart = cartData.some((item) => item.id === ele.id);

    if (isInCart) {
      addToCartListBtn.innerText = "ADDED ✔";
      addToCartListBtn.disabled = true;
    } else {
      addToCartListBtn.innerText = "Add to Cart";
      addToCartListBtn.disabled = false;
    }

    addToCartListBtn.addEventListener("click", () => {
      addToCartListBtn.innerText = "ADDING...";
      addToCartListBtn.disabled = true;
      addToCartList(ele, index);
    });

    let iconHeart = document.createElement("span");
    iconHeart.setAttribute("id", "removeFromWish");
    iconHeart.innerHTML = '<i class="fa fa-trash"></i>';
    iconHeart.addEventListener("click", () => {
      getDelete(index);
    });

    col4.append(addToCartListBtn, iconHeart);

    row.append(img, col2, col3, col4);

    WishlistProducts.append(row);
  });
};

displayData(wishlistData);

const getDelete = (index) => {
  wishlistData.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlistData));
  displayData(wishlistData);
};

function addToCartList(el, index) {
  cartData.push(el);
  localStorage.setItem("cart-list", JSON.stringify(cartData));
  addedToCartData.push(el.id);
  localStorage.setItem("added-to-cart", JSON.stringify(addedToCartData));

  let addToCartBtn = WishlistProducts.children[index].querySelector("button");
  addToCartBtn.innerText = "ADDED ✔";
  addToCartBtn.disabled = true;
}

function home() {
  location.href = "index.html";
}
