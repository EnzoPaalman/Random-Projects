// JSON POST requests: https://randomnerdtutorials.com/esp8266-nodemcu-http-get-post-arduino/#http-post
// HTTPS requests: https://randomnerdtutorials.com/esp8266-nodemcu-https-requests/
// WiFi
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
// JSON
#include <ArduinoJson.h>

// WiFi
const char* ssid = "MediaLab";
const char* password = "Mediacollege";

// POST
String serverProtocol = "https://";
String serverIP = ""; // Ma cloud url or localhost IP
String serverDirectory = ""; // path naar directory, bijvoorbeeld: "duurzaamhuis/post.php" 
String URL = ""; // URL om data naar te versturen, wordt automatisch aangemaakt.
const uint8_t fingerprint[20] = {0x1A, 0x48, 0xE9, 0x83, 0x9D, 0x49, 0x82, 0x92, 0xB1, 0xEC, 0x18, 0xCE, 0xBF, 0x5F, 0xFA, 0x54, 0xD8, 0x93, 0xFD, 0xA5}; // fingerprint van jou server

// JSON
const int capacity = JSON_OBJECT_SIZE(1);
StaticJsonDocument<capacity> doc;
char jsonOut[64];

// JSON testing
int count = 0;

void wifiConnect(){
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connecting...");
  }
  Serial.print("\r\nConnected: SSID: "); 
  Serial.print(ssid);
  Serial.print("    IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println("HTTP server started");
  Serial.println("\nSending POST data to: " + URL + "\n");
}

void CreateJSON() {
  doc["counter"] = count;
  serializeJson(doc, jsonOut);

  count = count + 1;
}

void SendPOST() {
  //WiFiClient client;
  WiFiClientSecure client;
  client.setFingerprint(fingerprint);
  HTTPClient https;
  
  if( https.begin(client, URL) ){
    https.addHeader("Content-Type", "application/json");
    int responseCode = https.POST(jsonOut);
    String responseMsg = https.getString();
    Serial.print("[HTTPS] POST code: ");
    Serial.print(responseCode);
    Serial.print("\n[HTTPS] Response: ");
    Serial.println(responseMsg);
    https.end();  
  } else Serial.println("POST is not working, check the steps in the powerpoint again.");
}

void setup() {
  Serial.begin(115200);     

  // Maak de POST url op basis van protocol, serverIP & directory
  if(serverProtocol.length() > 0) URL += serverProtocol;
  URL += serverIP;
  if(serverDirectory.length() > 0) URL += "/" + serverDirectory;
}

void loop() {
  if(WiFi.status() != WL_CONNECTED) wifiConnect();
  CreateJSON();
  SendPOST();
  delay(7500);
}
