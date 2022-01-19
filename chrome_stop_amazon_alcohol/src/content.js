let flag = true
let port

function stopAmazonAlcohol(){
    console.log(flag)

    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください")
    // なんやかんや

    serial.requestPort().then(selectedPort => {
      port = selectedPort
    }).catch(error => {
      console.log("コネクションエラー")
      flag = true
    }) 

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

serial.getPorts().then(ports => {
  if (ports.length == 0) {
    console.log("no connection")
  } else {
    port = ports[0];
  }
})