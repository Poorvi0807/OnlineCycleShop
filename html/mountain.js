let wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
let mainContainer = document.getElementById("products");
let filterData = [];
let materialFilter = [];
let url = 'https://bicycle-shop-json-server.cyclic.app/bikes';

// Pagination variables
let pageNumber = 1;
let itemsPerPage = 15;

// Initialize the page
fetchData();

function fetchData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            filterData = data;
            materialFilter = data;
            displayData(data);
            updatePagination();
        })
        .catch(error => console.error(error));
}

// Display data
function displayData(data) {
    mainContainer.innerHTML = "";
    let start = (pageNumber - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let itemsToDisplay = data.slice(start, end);

    let productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    itemsToDisplay.forEach(item => {
        // Create and append elements for each item
        let container = document.createElement("div");
        container.setAttribute("class", "item");

        // container.addEventListener('click',()=>{
        //     location.href='./productDetail.html'
        // })
    

        let image = document.createElement("img");
        image.src = item.large_img;

        let titlePriceDiv = document.createElement("div");
        titlePriceDiv.setAttribute("class", "titlePrice");

        let title = document.createElement("h3");
        title.textContent = item.title;

        let price = document.createElement("p");
        price.textContent = "₹ " + item.price;

        let button = document.createElement("button");
        button.setAttribute("class", "addItem");
        button.innerHTML = "🛒";
        button.addEventListener("click", () => toggleWishList(item, button));

        container.appendChild(image);
        titlePriceDiv.append(title, price, button);
        container.appendChild(titlePriceDiv);
        productsContainer.appendChild(container);
    });
}

// Filter data by category
function filterDataByCategory(categoryValue) {
    if (categoryValue === '') {
        displayData(materialFilter);
        return;
    }

    let filtered = materialFilter.filter(item => item.category.toLowerCase() === categoryValue.toLowerCase());
    displayData(filtered);
}

// Filter data by material
// function filterDataByMaterial(materialValue) {
//     if (materialValue === '') {
//         displayData(materialFilter);
//         return;
//     }

//     let filtered = materialFilter.filter(item => item.material.toLowerCase() === materialValue.toLowerCase());
//     displayData(filtered);
// }

// Filter data by color
function filterDataByColor(colorValue) {
    if (colorValue === '') {
        displayData(materialFilter);
        return;
    }

    let filtered = materialFilter.filter(item => item.frame_colors[0].toLowerCase() === colorValue.toLowerCase());
    displayData(filtered);
}

// Filter data by brake type
// function filterDataByBrakeType(brakeTypeValue) {
//     if (brakeTypeValue === '') {
//         displayData(materialFilter);
//         return;
//     }

//     let filtered = materialFilter.filter(item => item.brakeType.toLowerCase() === brakeTypeValue.toLowerCase());
//     displayData(filtered);
// }

// Filter data by suspension
// function filterDataBySuspension(suspensionValue) {
//     if (suspensionValue === '') {
//         displayData(materialFilter);
//         return;
//     }

//     let filtered = materialFilter.filter(item => item.suspension.toLowerCase() === suspensionValue.toLowerCase());
//     displayData(filtered);
// }

// Filter data by wheel size
function filterDataByWheelSize(wheelSizeValue) {
    if (wheelSizeValue === '') {
        displayData(materialFilter);
        return;
    }

    let filtered = materialFilter.filter(item => item.size.toLowerCase() === wheelSizeValue.toLowerCase());
    displayData(filtered);
}

// Filter data by model year
function filterDataByModelYear(yearValue) {
    if (yearValue === '') {
        displayData(materialFilter);
        return;
    }

    let filtered = materialFilter.filter(item => item.year === parseInt(yearValue));
    displayData(filtered);
}

// Sort data by price (low to high)
function sortDataByPriceLow() {
    let sortedData = [...filterData].sort((a, b) => a.price - b.price);
    displayData(sortedData);
}

// Sort data by price (high to low)
function sortDataByPriceHigh() {
    let sortedData = [...filterData].sort((a, b) => b.price - a.price);
    displayData(sortedData);
}

// Toggle wishlist item
function toggleWishList(item, button) {
    const index = wishList.findIndex(wishItem => wishItem.id === item.id);
    if (index !== -1) {
        // Remove from wishlist
        wishList.splice(index, 1);
        button.innerHTML = "🛒";
    } else {
        // Add to wishlist
        wishList.push(item);
        button.innerHTML = "🛒";
    }

    localStorage.setItem('wishlist', JSON.stringify(wishList));
}

// Pagination functionality
function updatePagination() {
    let pagination = document.getElementById("pagination1");
    pagination.innerHTML = "";
    let totalPages = Math.ceil(filterData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "pagination-button");
        btn.textContent = i;

        btn.addEventListener("click", () => {
            pageNumber = i;
            displayData(filterData);
        });

        pagination.appendChild(btn);
    }
}

// Initialize filter and sorting listeners
function setupFilterListeners() {
    // Material filter
    // let material = document.getElementById("material");
    // material.addEventListener("change", () => {
    //     filterDataByMaterial(material.value);
    // });

    // Color filter
    let color = document.getElementById("color");
    color.addEventListener("change", () => {
        filterDataByColor(color.value);
    });

    // Brake type filter
    // let brakeType = document.getElementById("break");
    // brakeType.addEventListener("change", () => {
    //     filterDataByBrakeType(brakeType.value);
    // });

    // Suspension filter
    // let suspension = document.getElementById("suspension");
    // suspension.addEventListener("change", () => {
    //     filterDataBySuspension(suspension.value);
    // });

    // Wheel size filter
    let wheelSize = document.getElementById("wheel");
    wheelSize.addEventListener("change", () => {
        filterDataByWheelSize(wheelSize.value);
    });

    // Model year filter
    let modelYear = document.getElementById("year");
    modelYear.addEventListener("change", () => {
        filterDataByModelYear(modelYear.value);
    });

    // Category filter
    let category = document.getElementById("category");
    category.addEventListener("change", () => {
        filterDataByCategory(category.value);
    });
}

function sortDataByPrice() {
    let sortOption = document.getElementById("sort").value;
    if (sortOption === "low") {
        sortDataByPriceLow();
    } else if (sortOption === "high") {
        sortDataByPriceHigh();
    }
}

function setupSortingListeners() {
    // Sort button
    let sortButton = document.getElementById("sort");
    sortButton.addEventListener("change", sortDataByPrice);
}

// Initialize filter and sorting listeners
setupFilterListeners();
setupSortingListeners();



// // Get references to the search input and search results container
// const searchInput = document.getElementById('search-input');
// const searchResults = document.getElementById('search-results');

// // Listen for input events on the search input field
// searchInput.addEventListener('input', () => {
//     const searchValue = searchInput.value.toLowerCase();

//     // Filter products based on the search value
//     const filteredProducts = filterProductsByName(searchValue);

//     // Display the filtered results
//     displaySearchResults(filteredProducts);
// });

// // Function to filter products by name
// function filterProductsByName(searchValue) {
//     return filterData.filter(item => item.title.toLowerCase().includes(searchValue));
// }

// // Function to display search results
// function displaySearchResults(results) {
//     searchResults.innerHTML = '';

//     results.forEach(item => {
//         const resultItem = document.createElement('li');
//         resultItem.textContent = item.title;
//         resultItem.addEventListener('click', () => {
//             // Redirect to the product page with the selected product's ID
//             window.location.href = `product.html?id=${item.id}`;
//         });

//         searchResults.appendChild(resultItem);
//     });
// }






// document.addEventListener("DOMContentLoaded", function () {
//     // Make the API request here
//     fetchDataFromAPI();
//   });

  
//   function fetchDataFromAPI() {
//     // fetch request to the API
//     fetch("https://bicycle-shop-json-server.cyclic.app/bikes")
//       .then((response) => response.json())
//       .then((data) => {
//         const productsElement = document.getElementById("products");
  
//         // Loop through the data and append each item to the #products element
//         data.forEach((item) => {
//           const productElement = document.createElement("div");
//           productElement.className = "product";
  
//           // HTML structure for each product using the data
//           productElement.innerHTML = `
//             <img src="${item.large_img}" alt="Product Image">
//             <p>Price: $${item.price}</p>
//             <p>Category: ${item.title}</p>
//           `;
  
//           // Append the product to the #products element
//           productsElement.appendChild(productElement);
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching data from the API: ", error);
//       });
//   }
  