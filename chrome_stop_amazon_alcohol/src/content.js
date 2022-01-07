function stopAmazonAlcohol(){
    alert("やめとき")
}

let addToCartButton = document.getElementById("add-to-cart-button")
let buyNowButton = document.getElementById("buy-now-button")

addToCartButton.setAttribute("onclick", "stopAmazonAlcohol();stopPropagation()")
buyNowButton.setAttribute("onclick", "stopAmazonAlcohol()")

console.log(addToCartButton)
console.log(buyNowButton)