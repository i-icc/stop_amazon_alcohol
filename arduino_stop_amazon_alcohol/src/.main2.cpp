#include <Arduino.h>

const int pinNum = A1;

void setup() {
  Serial.begin(9600);
  Serial.println("conected\r\n");
  Serial.flush();

  pinMode(pinNum, INPUT);
}

void loop() {
  Serial.flush();
  int score = analogRead(pinNum);
  Serial.println(score);
  Serial.flush();
}