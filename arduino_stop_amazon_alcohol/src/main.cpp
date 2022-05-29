#include <Arduino.h>

#include <WebUSB.h>

WebUSB WebUSBSerial(1 , "www.amazon.co.jp/*");
// WebUSB WebUSBSerial(1 , "*");

#define Serial WebUSBSerial

const int pinNum = A0;

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("conected\r\n");
  Serial.flush();

  pinMode(pinNum, INPUT);
}

void loop() {
  Serial.flush();
  if (Serial) {
    int score = analogRead(pinNum);
    String data = String(score);
    for (int i = 0;i < data.length(); i++)
      Serial.write(data[i]);
    Serial.write("\r\n");
    Serial.flush();
  }
}