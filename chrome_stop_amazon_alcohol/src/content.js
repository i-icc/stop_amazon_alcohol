let flag = true

async function stopAmazonAlcohol(){
    console.log(flag)

    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください")
    // なんやかんや
    const vendor_id = 0x2341
    const product_id = 0x8036
    await navigator.usb.requestDevice(
      {
        'filters': [
          {'vendorId': vendor_id, 'product_id': product_id}
        ]
      }
    )

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