#include <Arduino.h>
#include <WebUSB.h>

const int pinNum = A5;

void setup() {
  // put your setup code here, to run once:
  pinMode(pinNum, INPUT);

  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  int data = analogRead(pinNum);
  Serial.println(data);
}