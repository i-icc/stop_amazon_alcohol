'use strict';

let flag = true;
let alcoholScore = 0;
let port;
let score;

$("#addToCart_feature_div").before('<div class="a-button-stack"><span class="a-button a-spacing-small a-button-primary a-button-icon buybox-button-enhancement-size"><span class="a-button-inner"><input id="connect-device" class="a-button-input attach-dss-atc" type="button"><span class="a-button-text">センサーに接続する</span></span></span></div>');

function judgeAlcohpl(){
  console.log(score + " " + alcoholScore)
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
      getAlcohol()
    }
    return is_connect
  })
}

async function stopAmazonAlcohol(){
    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください");

    if (! await judgeConect()){
      return
    } else {
      await judgeAlcohpl()
      const intervalId = setInterval(judgeAlcohpl, 100);
      setTimeout(clearInterval(intervalId), 3000);
      console.log(alcoholScore)
      if (alcoholScore < 400){
        flag = false
        alert("( ´∀`)σ よし！")
      } else {
        alert("STOP 飲酒アマゾン")
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
    getAlcohol()
  }
})

function getAlcohol() {
  return port.connect().then(() => {
    port.onReceive = data => {
      let textDecoder = new TextDecoder();
      score = Number(textDecoder.decode(data))
    }
    port.onReceiveError = error => {
      console.log(error)
    }
  }, error => {
    console.log(error)
  });
};