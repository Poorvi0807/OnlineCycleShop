// slider
let slider = document.getElementsByName("slider")
let slide_c=0

setInterval(()=>{
    slider[slide_c].checked=true
if(slide_c==slider.length-1){
    slide_c=0;
}else{
    slide_c++;
}
},4000)