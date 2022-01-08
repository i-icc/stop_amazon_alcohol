function stopAmazonAlcohol(){
    alert("やめとき")
}

let addToCartButton = document.getElementById("add-to-cart-button")
let buyNowButton = document.getElementById("buy-now-button")

addToCartButton.setAttribute("onclick", "stopAmazonAlcohol();stopPropagation()")
buyNowButton.setAttribute("onclick", "stopAmazonAlcohol()")

console.log(addToCartButton)
console.log(buyNowButton)

$(".add-to-cart-button").on("click",function(){
    stopAmazonAlcohol()
});

$(".buy-now-button").on("click",function(){
    stopAmazonAlcohol()
});
