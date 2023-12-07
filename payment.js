
document.querySelector('form').addEventListener("submit", carddata);

function carddata() {
  event.preventDefault();
  let cardNum = document.getElementById('cardNum').value;
  console.log(cardNum);
  if ("123456789" == cardNum) {
    var btn = document.getElementById("btn");
    btn.addEventListener("click",()=>{
      location.href="otp.html"
    })
  } else {
    alert("Not getting account details. Try this: CardNo.111111111111, CVV.123");
  }
}


let price = localStorage.getItem('cart_Value') || 0;

document.getElementById('price').textContent = `€ ${price}`;

function home(){
  location.href = "index.html"
}