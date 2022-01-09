let flag = true

function stopAmazonAlcohol(){
    console.log(flag)

    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください")
    // なんやかんや
    flag = false

    if (flag){

    } else {
        // 別ページに飛ばす
    }
}

$("#add-to-cart-button").mouseover(function(){
    if (flag) stopAmazonAlcohol()
});

$("#buy-now-button").mouseover(function(){
    if (flag) stopAmazonAlcohol()
});