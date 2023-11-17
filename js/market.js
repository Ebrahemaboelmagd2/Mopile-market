var btn = document.querySelectorAll(".btnn");
var total = document.querySelector(".total");
var after = document.querySelector(".after");
var content = document.querySelector(".content");
var price = document.querySelector(".total-price");


console.log(after);

var allprice = 0 ;
var Counter = 0 ;


btn.forEach(function (item){
    item.onclick = function (){
        total.textContent = "Total::";
        after.innerHTML = ++Counter;
        after.style.display = "block";
        allprice += +(item.getAttribute("price"))
        content.innerHTML += (item.getAttribute("name")) + " + ";
        if (content.innerHTML != "" ) {
            content.style.display = "block";
            price.style.display = "block";
        }; 
    }
}); 
price.onclick = function () {
    total.innerHTML += +allprice
}