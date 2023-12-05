// {/* <script> */}
//         const data = [
//             {
//                 "large_img": "https://m.media-amazon.com/images/I/41mXAbIYkCL._SX300_SY300_QL70_FMwebp_.jpg",
//                 "title": "Urban Terrain UT1000 Steel MTB 27.5 Mountain Cycle",
//                 "price": 11920,
//                 "id": "bic1",
//                 "color": "white",
//             },

//             {
//                 "large_img": "https://m.media-amazon.com/images/I/41mXAbIYkCL._SX300_SY300_QL70_FMwebp_.jpg",
//                 "title": "Urban Terrain UT1000 Steel MTB 27.5 Mountain Cycle",
//                 "price": 11920,
//                 "id": "bic2",
//                 "color": "white",
//             }
//         ]


//         var parent = document.getElementById("parent")
//         // console.log(parent)

//         if (data.length == 0) {
//             parent.textContent = "Cart Empty";
            
//             var buttontxt = document.createElement('button');
//             buttontxt.textContent = "Keep Shopping";

//             parent.append(buttontxt);

//         }
//         else {

//             var sumTotal = 0;
//             var totalSum= document.createElement("p")

//             function sumTotall (){
//                 // console.log(document.getElementsByClassName("newElement"))
//                 // console.log(document.getElementsByClassName("newElement")[0])
//                 // console.log(document.getElementsByClassName("newElement")[0].childNodes[1])
//                 // console.log(document.getElementsByClassName("newElement")[0].childNodes[1].childNodes[1])
//                 // console.log(document.getElementsByClassName("newElement")[0].childNodes[1].childNodes[1].childNodes[0].nodeValue)
            
//             var collection = document.getElementsByClassName("newElement")
//             // console.log(sum)
//             sumTotal = 0;
//             for (let i of collection) {
//                 sumTotal= sumTotal + parseInt(i.childNodes[1].childNodes[1].childNodes[0].nodeValue)
//             }
//             // console.log(sumTotal)
//             totalSum.textContent = `total sum is = ${sumTotal}`;

//             }

//             const elements = data.map((i) => {

//                 var pQty = document.createElement('p');
//                 pQty.textContent = 1;

//                 var newElement = document.createElement('div');
//                 newElement.setAttribute('class','newElement');
//                 newElement.setAttribute('id', `${i.id}`);

//                 var newElementText= document.createElement('div');

//                 var pName = document.createElement('p');
//                 pName.textContent = `${i.title}`

//                 var buttonplus = document.createElement('button')
//                 var buttonmin = document.createElement('button')

//                 buttonplus.setAttribute('class', 'buttonplus')
//                 buttonmin.setAttribute('class', 'buttonplus')

//                 buttonmin.textContent = '-'

//                 var pimg = new Image()
//                 pimg.src = `${i.large_img}`

//                 var pPrice = document.createElement('p');
//                 pPrice.textContent = `${i.price}`

//                 var pQty = document.createElement('p');
//                 pQty.textContent = 1

//                 buttonplus.textContent = '+'
//                 buttonplus.addEventListener('click', () => {
//                     pQty.textContent = parseInt(pQty.textContent) + 1
//                     pPrice.textContent = parseInt(pQty.textContent) * `${i.price}`
//                     sumTotall ()

//                 })

//                 buttonmin.addEventListener('click', () => {
//                     pQty.textContent = parseInt(pQty.textContent) < 2 ? parseInt(pQty.textContent) : parseInt(pQty.textContent) - 1;
//                     pPrice.textContent = parseInt(pQty.textContent) * `${i.price}`
//                     sumTotall()

//                 })
//                 newElementText.append(pName, pPrice, buttonmin, pQty, buttonplus)

//                 newElement.append(pimg,newElementText )

//                 return (
//                     newElement
//                 )
//             })           
//             // console.log(elements)
//             elements.forEach((e) => {
//                 parent.append(e)
//             })

//             sumTotall()
 
//         }
//         var container = document.getElementById("container")

//         var checkoutDiv= document.createElement("div")
//         checkoutDiv.setAttribute("class", "checkoutDiv")

//             var checkout= document.createElement("button")
//             checkout.addEventListener("click", ()=>{
//                 location.href = "address.html";
//             })
        
//             checkout.textContent="Checkout";
//             checkoutDiv.append(totalSum,checkout);
//             container.append(checkoutDiv);
            
//     {/* </script> */}