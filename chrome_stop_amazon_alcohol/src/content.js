'use strict';

let flag = true;
let alcoholScore = 0;
let port;
let score;

$("#addToCart_feature_div").before('<div class="a-button-stack"><span class="a-button a-spacing-small a-button-primary a-button-icon buybox-button-enhancement-size"><span class="a-button-inner"><input id="connect-device" class="a-button-input attach-dss-atc" type="button"><span class="a-button-text">センサーに接続する</span></span></span></div>');

async function judgeAlcohpl(){
  await getAlcohol()
  console.log(score)
  if (score > alcoholScore){
    alcoholScore = score;
  }
}

async function judgeConect(){
  return serial.getPorts().then(ports => {
    let is_connect = null;
    if (ports.length == 0) {
      alert("センサーに接続してください。")
      port = undefined;
      flag = true;
      is_connect = false;
    } else {
      port = ports[0];
      is_connect = true;
    }
    return is_connect
  })
}

async function stopAmazonAlcohol(){
    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください");
    // なんやかんや

    // let is_connect = await judgeConect()
    if (! await judgeConect()){
      return
    } else {
      await judgeAlcohpl()
      flag = alcoholScore < 400;
      if (! flag){
        alert("あなたはシラフです。")
      } else {
          // 別ページに飛ばす
      }
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
    console.log(port)
  }
})

async function getAlcohol() {
  return port.connect().then(() => {
    port.onReceive = data => {
      let textDecoder = new TextDecoder();
      score = Number(textDecoder.decode(data))
      console.log(score)
      return score
    }
    console.log(port.onReceive())
    console.log(port)
    return port.onReceive()
  });
};