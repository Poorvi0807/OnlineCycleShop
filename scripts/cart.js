let sumMRP = 0; // total MRP
let data = JSON.parse(localStorage.getItem("cart-list")) || []; // Retrieve cart data from local storage or initialize as empty array if not found

let cartItem = document.querySelector("#cart");
let sum = 0; // total price

function displayCart(data) {
 
  cartItem.innerHTML = ""; // Clear the cart element before displaying items
  console.log(data, sum);
  data.forEach((ele, i) => {
    let div = document.createElement("div"); // Create a div element for each cart item
    div.id = "mainDiv";

    let divImg = document.createElement("div");
    divImg.id = "imgDiv";

    let img = document.createElement("img");
    img.src = ele.large_img;

    let divDetails = document.createElement("div");
    divDetails.id = "detail";

    let productdescriptionname = document.createElement("h4");
    productdescriptionname.textContent = ele.title;

    let mrp = document.createElement("p");
    mrp.textContent = "₹ " + ele.price;
    mrp.id = "displayMRPfynl";

    let qty = document.createElement("div");
    qty.className = "qtyDiv";

    let disc = document.createElement("button"); // Decrease quantity button
    disc.textContent = "-";
    disc.addEventListener("click", function () {
      if (ele.quantity == 1) {
        alert("Minimum Quantity could be 1");
      } else {
        ele.quantity--;
        qnty.value = ele.quantity;
        updatePrice();
      }
    });

    let qnty = document.createElement("input");
    qnty.value = ele.quantity || 1; // Initialize quantity to 1 if not previously set

    let add = document.createElement("button"); // Increase quantity button
    add.textContent = "+";
    add.addEventListener("click", function () {
      ele.quantity++;
      qnty.value = ele.quantity;
      updatePrice();
    });

    let divFinalmrp = document.createElement("div");

    let finmrp = document.createElement("p"); // Final price
    finmrp.textContent = "₹ " + parseInt(ele.price * (ele.quantity || 1)); // Calculate the final price using quantity or default to 1
    finmrp.id = "finalPrice";

    let delet = document.createElement("div");
    let del = document.createElement("button"); // Delete button
    del.id = "delcart";
    let delimg = document.createElement("img"); // Delete button icon
    delimg.src = "../Images/delet.svg";
    delimg.id = "dellogo";

    del.addEventListener("click", function () {
      data.splice(i, 1); // Remove the item from the cart data
      updatePrice();
      localStorage.setItem("cart-list", JSON.stringify(data));
      displayCart(data);
    });

    divImg.append(img);
    del.append(delimg);
    divDetails.append(productdescriptionname, mrp);
    qty.append(disc, qnty, add);
    divFinalmrp.append(finmrp);
    delet.append(del);
    div.append(divImg, divDetails, qty, divFinalmrp, delet);
    cartItem.append(div);
  });

  updatePrice();
}

function updatePrice() {
  sum = 0;
  sumMRP = 0;
  let cartItems = document.querySelectorAll("#cart #mainDiv");
  cartItems.forEach((item) => {
    let price = parseInt(
      item
        .querySelector("#detail #displayMRPfynl")
        .textContent.replace("₹ ", "")
    );
    let quantity = parseInt(item.querySelector(".qtyDiv input").value) || 1; // Retrieve quantity or default to 1
    let finalPrice = price * quantity;
    item.querySelector("#finalPrice").textContent = "₹ " + finalPrice;
    sum += finalPrice;
    sumMRP += price;
    item.dataset.quantity = quantity; // Update the quantity value in the dataset attribute
  });

  localStorage.setItem("cart_Value", sum);
  document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
  document.getElementById("finalAmt").textContent = "₹ " + sum;
  localStorage.setItem("cart-list", JSON.stringify(data)); // Update the cart data in local storage with the updated quantity values
}

displayCart(data);

function home() {
  location.href = "../index.html";
}
