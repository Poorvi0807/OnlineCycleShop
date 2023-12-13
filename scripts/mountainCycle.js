let wishList = JSON.parse(localStorage.getItem('wishlist')) || [];

let mainContainer = document.getElementById("products")

let filterData =[];
let materailFilter = [];

let url = 'https://slate-gray-fox-belt.cyclic.app/data?catrgory=Off_roading'



// pagination********************

let pageNumber;
let len = (url.length + 5) / 9;
console.log(len);
let resutl = Math.round(len);

let n = resutl;
// console.log(n)

// pagination function
let pagination = document.getElementById("pagination1");

for (let i = 1; i <= 5; i++) {
  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "pagination-button");
  btn1.textContent = i;
  // pageNumber = i

  btn1.addEventListener("click", () => {
    pageNumber = i;
    featchData();
  });
  pagination.append(btn1);
}


  async function featchData() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      filterData = data;
      materailFilter = data;
      displayData(data);
     
    } catch (err) {
      console.log(err);
    }
  }
  
  function removeOverlay() {
    let overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.parentNode.removeChild(overlay);
    }
  }
  
  featchData();
  
  
  function displayData(data) {
    mainContainer.innerHTML = "";
    data.map((ele) => {
      let container = document.createElement("div");
      container.setAttribute("class", "item");
  
      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "imgDiv");
  
      let image = document.createElement("img");
      image.src = ele.image;
  
      let titlePriceDiv = document.createElement("div");
      titlePriceDiv.setAttribute("class", "titlePrice");
  
      let title = document.createElement("h3");
      title.textContent = ele.title;
  
      let price = document.createElement("p");
      price.textContent = "₹ " + ele.price;
  
      let button = document.createElement("button");
      button.setAttribute("class", "addItem");
      button.innerHTML = "🤍";
      button.addEventListener("click", function () {
        addToWishList(ele);
      });
  
      imgDiv.appendChild(image);
      titlePriceDiv.append(title, price, button);
      container.append(imgDiv, titlePriceDiv);
      mainContainer.appendChild(container);
    });
  }



function addToWishList(item){
    wishList.push(item)
    localStorage.setItem("wishlist",JSON.stringify(wishList))
}


// category 
// let category = document.getElementById("category")

// category.addEventListener("change", ()=>{
//     let filtered = filterData.filter((ele)=>{
//         if(ele.catrgory === category.value){
//             return ele
//         }
//     })
//     displayData(filtered)
// })
//  materail filter
let material = document.getElementById("material")
material.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.materia === material.value){
            return ele
        }
    })
    displayData(filtered)
})

// size

let size = document.getElementById("size")
size.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.size === size.value){
            return ele
        }
    })
    displayData(filtered)
})

// color

let color = document.getElementById("color")
color.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.color === color.value){
            return ele
        }
    })
    displayData(filtered)
})


// break

let brk = document.getElementById("break")
brk.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.brake_type === brk.value){
            return ele
        }
    })
    displayData(filtered)
})


// suspension

let suspension = document.getElementById("suspension")
suspension.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.suspension === suspension.value){
            return ele
        }
    })
    displayData(filtered)
})


// wheel

let wheel = document.getElementById("wheel")
wheel.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.wheel_size === wheel.value){
            return ele
        }
    })
    displayData(filtered)
})

// year

let year = document.getElementById("year")
year.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele) =>{
        if (ele.model_year === year.value){
            return ele
        }
    })
    displayData(filtered)
})

// sorting price


let low = document.getElementById("low")
low.addEventListener("click", lowFuntion)

function lowFuntion(){
    let data1 = materailFilter.sort((a,b) => +a.price - + b.price)
    console.log(data1)
    displayData(data1)


}

let high = document.getElementById("high")
high.addEventListener("click", highFuntion)

function highFuntion(){
    let data1 = materailFilter.sort((a,b) => +b.price - + a.price)
    console.log(data1)
    displayData(data1)

}
  
