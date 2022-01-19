let flag = true
let port

$("#addToCart_feature_div").before('<div class="a-button-stack"><span class="a-button a-spacing-small a-button-primary a-button-icon buybox-button-enhancement-size"><span class="a-button-inner"><input id="connect-device" class="a-button-input attach-dss-atc" type="button"><span class="a-button-text">センサーに接続する</span></span></span></div>')

function stopAmazonAlcohol(){
    console.log(flag)

    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください")
    // なんやかんや

    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        alert("センサーに接続してください。")
        port = null
        flag = true
        return
      } else {
        port = ports[0];
        console.log("conected")
      }
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

$("#connect-device").click(function() {
  if (port) {
    alert("接続済みです")
  } else {
    serial.requestPort().then(selectedPort => {
      port = selectedPort;
    }).catch(error => {
      alert("接続に失敗しました")
    });
  }
});

serial.getPorts().then(ports => {
  if (ports.length == 0) {
    console.log("no connection")
  } else {
    port = ports[0];
  }
})