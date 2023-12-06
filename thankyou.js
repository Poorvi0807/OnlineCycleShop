var preloader = document.getElementById("loading");

function myFunction() {
    preloader.style.display ='none';
}
setTimeout(()=>{
location.href="index.html"
},5000)