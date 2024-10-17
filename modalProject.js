let button=document.getElementById("button");
let modalcontent=document.getElementById("madalContent");
let modaldiv=document.getElementById("modalDiv");
const overLay=document.getElementById("overLay");
button.addEventListener("click", function(){
    modalcontent.style.display='flex';
    //  modaldiv.style.display='none';
    let buttonCloses=document.getElementById("buttonCloses");
    overLay.style.display="block";
})
buttonCloses.addEventListener("click", function(){
    // modaldiv.style.display='flex';
    modalcontent.style.display='none';
    overLay.style.display="none";
   })