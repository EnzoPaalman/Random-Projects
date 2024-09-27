#include <WiFiClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
ESP8266WebServer server(80);

// LED pins
uint8_t Led1 = D3; //LED indicator 
uint8_t Led2 = D5; //LED indicator
uint8_t Led3 = D6; //LED indicator

// status of each led
bool led1Status = false; //toggle led on/off
bool led2Status = false; //toggle led on/off
bool led3Status = false; //toggle led on/off

// your data
String studentName = "Juda student nummer 00000";
const char* ssid = "iPhone van Yaido";
const char* password = "Yaido123";

void wifiConnect(){
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.print("Connecting..");
      }
  //if connected
  Serial.print("\r\nConnected: SSID: "); 
  Serial.print(ssid);
  Serial.print("    IP address: ");
  Serial.println(WiFi.localIP());

  server.begin();
  Serial.println("HTTP server started");
 }


void handleRoot() {
  // send text/html back to the connected client
  server.send(200, "text/html", "<h3>Groetjes van Duurzaam Huis! mijnnaam is: " + studentName +
  "<h3> <form action=\"/led1\" method=\"GET\"><input type=\"submit\" name=\"GET_LED1\" value=\"Toggle Led1\"></form> " +
  "<form action=\"/led2\" method=\"GET\"><input type=\"submit\" name=\"GET_LED2\" value=\"Toggle Led2\"></form> " +
  "<form action=\"/led3\" method=\"GET\"><input type=\"submit\" name=\"GET_LED3\" value=\"Toggle Led3\"></form> "
  );
  
}

// requested url not found
void handleNotFound(){
  String message = "File Not Found\n\n";
  server.send(404, "text/plain", message);
}

void setup(){
  // Setup your LED's Here!

  pinMode(Led1, OUTPUT);

  
  Serial.begin(115200);      //  Start de serial monitor

/*
 * Webserver functionaliteit
 *  server.on("/"
 *  server.on("/easter_egg"
 *  server.on("/led1"
 *  server.onNotFound
 */

  // server.on("/RequestedURL") activates and calls a function when a client types in this specific url
  server.on("/", handleRoot);

  server.on("/easter_egg", [](){
        server.send(200, "text/plain", "hoera dit werkt");
    });

  server.on("/led1", [](){
    if(!led1Status && !digitalRead(Led1)){
      server.send(200, "text/plain", "led1 on");
      digitalWrite(Led1, HIGH); // led 1 on
      led1Status = true;
    }
  });

  server.onNotFound(handleNotFound);
}

void loop(){
  if (WiFi.status() != WL_CONNECTED) wifiConnect();// reconnect Wifi if necessary 
  server.handleClient();
}
