const displayBee = document.querySelector("#bee")
const displayHola = document.querySelector("#hola")

displayBee.textContent = "Este texto ha sido modificado por javascript"

const bienvenida = ["Hola mundo", "Hello world", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Olá mundo"]

function elegir(){
    const rng = Math.floor(Math.random() * bienvenida.length)
    const eleccionCiudad = bienvenida[rng]

    displayHola.textContent = eleccionCiudad
}