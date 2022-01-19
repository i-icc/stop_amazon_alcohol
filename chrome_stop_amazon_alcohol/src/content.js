let flag = true
let port

function connect() {
  // t.io.println('Connecting to ' + port.device_.productName + '...');
  port.connect().then(() => {
    console.log(port);
    t.io.println('Connected.');
    connectButton.textContent = 'Disconnect';
    port.onReceive = data => {
      let textDecoder = new TextDecoder();
      t.io.print(textDecoder.decode(data));
    }
    port.onReceiveError = error => {
      t.io.println('Receive error: ' + error);
    };
  }, error => {
    t.io.println('Connection error: ' + error);
  });
};

function stopAmazonAlcohol(){
    console.log(flag)

    alert("酔っ払っていませんか？\nセンサーに息を吹きかけてください")
    // なんやかんや
    const vendor_id = 0x2341
    const product_id = 0x8036

    if (! port){
      serial.requestPort().then(selectedPort => {
        port = selectedPort;
        connect();
      }).catch(error => {
        t.io.println('Connection error: ' + error);
      });
    }

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