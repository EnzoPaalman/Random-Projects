// Samengewerkt met Turan Ay
int LDR_In = A0;
int lichtHoeveelheid;
uint8_t led1 = D3;
uint8_t led2 = D5;
uint8_t led3 = D8;

void setup(){
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
}

void loop(){
  lichtHoeveelheid = analogRead(LDR_In);
  int analogValue = analogRead(A0);
  Serial.print("Analog reading: ");
  Serial.print(analogValue);
  if (analogValue < 8) {
    Serial.println(" - Dark");
    digitalWrite(led1, HIGH);
    digitalWrite(led2, HIGH);
    digitalWrite(led3, HIGH);
  } else if (analogValue < 10) {
    Serial.println(" - Dim");
    digitalWrite(led1, HIGH);
    digitalWrite(led2, HIGH);
    digitalWrite(led3, LOW);
  } else if (analogValue < 20) {
    Serial.println(" - Light");
    digitalWrite(led1, HIGH);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
  } else if (analogValue < 50) {
    Serial.println(" - Bright");
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
  }
  
  delay(500);
}
