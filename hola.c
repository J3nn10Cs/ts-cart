int LedRojo = 12;     // LED Rojo
int LedAzul = 11;     // LED Azul
int LedNaranja = 10;  // LED Naranja

String numeroBinario;

void setup() {
  // Configuramos los pines como salidas
  pinMode(LedRojo, OUTPUT);
  pinMode(LedAzul, OUTPUT);
  pinMode(LedNaranja, OUTPUT);
  
  // Iniciar comunicación serial
  Serial.begin(9600);
}

void loop() {
  // Pedir al usuario que ingrese un número binario de 3 dígitos
  Serial.println("Ingrese un numero binario de 3 digitos (por ejemplo, 011):");

  // Esperar hasta que el usuario ingrese el número binario
  while (Serial.available() == 0) {}

  // Leer el número binario ingresado por el usuario como una cadena
  numeroBinario = Serial.readString();
  Serial.println(numeroBinario);
  
  // Apagar todos los LEDs antes de encender los seleccionados
  digitalWrite(LedRojo, LOW);
  digitalWrite(LedAzul, LOW);
  digitalWrite(LedNaranja, LOW);

  // Encender los LEDs correspondientes según el número binario ingresado
  if (numeroBinario[0] == '1') {
    digitalWrite(LedRojo, HIGH);    // Encender LED Rojo
  }
  if (numeroBinario[1] == '1') {
    digitalWrite(LedAzul, HIGH);    // Encender LED Azul
  }
  if (numeroBinario[2] == '1') {
    digitalWrite(LedNaranja, HIGH); // Encender LED Naranja
  }

  // Añadir un breve retardo antes de pedir la siguiente entrada
  delay(1000);
}
