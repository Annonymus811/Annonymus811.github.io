function escribirConsola(texto) {
  const consola = document.getElementById("consola");
  consola.innerHTML += `<br>> ${texto}`;
  consola.scrollTop = consola.scrollHeight;
}

function limpiarConsola() {
  const consola = document.getElementById("consola");
  consola.innerHTML = "<strong>📟 Consola digital:</strong><br>";
}

// ---- CÓDIGO BINARIO ----
function cifrarBinario() {
  let texto = document.getElementById("textoBinario").value;
  let binario = texto.split("").map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(" ");
  escribirConsola("Binario cifrado: " + binario);
}

function descifrarBinario() {
  let binario = document.getElementById("textoBinario").value;
  let texto = binario.split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("");
  escribirConsola("Binario descifrado: " + texto);
}

// ---- CIFRADO CÉSAR ----
function cifrarCesar() {
  let texto = document.getElementById("textoCesar").value.toLowerCase();
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value) || 3;
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let c = texto[i];
    if (c.match(/[a-z]/)) {
      let code = ((c.charCodeAt(0) - 97 + desplazamiento) % 26) + 97;
      resultado += String.fromCharCode(code);
    } else {
      resultado += c;
    }
  }
  escribirConsola("César cifrado: " + resultado);
}

function descifrarCesar() {
  let texto = document.getElementById("textoCesar").value.toLowerCase();
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value) || 3;
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let c = texto[i];
    if (c.match(/[a-z]/)) {
      let code = ((c.charCodeAt(0) - 97 - desplazamiento + 26) % 26) + 97;
      resultado += String.fromCharCode(code);
    } else {
      resultado += c;
    }
  }
  escribirConsola("César descifrado: " + resultado);
}

// ---- CÓDIGO MORSE ----
const morseCode = {
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
  "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
  "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
  "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
  "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
  "z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "0": "-----", " ": "/"
};

const morseDecode = Object.fromEntries(Object.entries(morseCode).map(([k, v]) => [v, k]));

function cifrarMorse() {
  let texto = document.getElementById("textoMorse").value.toLowerCase();
  let cifrado = texto.split("").map(c => morseCode[c] || "").join(" ");
  escribirConsola("Morse cifrado: " + cifrado);
}

function descifrarMorse() {
  let codigo = document.getElementById("textoMorse").value.trim().split(" ");
  let texto = codigo.map(c => morseDecode[c] || "").join("");
  escribirConsola("Morse descifrado: " + texto);
}
