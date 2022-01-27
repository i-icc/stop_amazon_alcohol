'use strict';

let flag = true;
let port;

$("#addToCart_feature_div").before('<div class="a-button-stack"><span class="a-button a-spacing-small a-button-primary a-button-icon buybox-button-enhancement-size"><span class="a-button-inner"><input id="connect-device" class="a-button-input attach-dss-atc" type="button"><span class="a-button-text">センサーに接続する</span></span></span></div>');

function judgeAlcohpl(){
  port.connect().then(() => {
    console.log(port);
    /* port.onReceive = data => {
      console.log(data)
    } */
  }, error => {
    console.log("接続中エラーが生じました。")
  });
}

function stopAmazonAlcohol(){
    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください");
    // なんやかんや

    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        alert("センサーに接続してください。")
        port = undefined
        flag = true
        return
      } else {
        port = ports[0];
        console.log("conected")
      }
    })

    console.log(initialize())
    // flag = false

    if (flag){
      alert("あなたはシラフです。")
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
  console.log(port)
  if (port) {
    alert("接続済みです")
  } else {
    serial.requestPort().then(selectedPort => {
      port = selectedPort;
      initialize()
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
    initialize()
    console.log(port)
  }
})

function initialize() {
  port.connect().then(() => {
    port.onReceive = data => {
      let textDecoder = new TextDecoder();
      console.log(textDecoder.decode(data))
      return textDecoder.decode(data);
    }
    port.onReceiveError = error => {
      console.log('Receive error: ' + error);
    };
  }, error => {
    console.log('Connection error: ' + error);
  });
};