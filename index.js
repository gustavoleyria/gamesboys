const piedra = "https://previews.123rf.com/images/kongvector/kongvector1711/kongvector171104302/90585925-estilo-de-dibujos-animados-de-personaje-de-piedra-s%C3%BAper-h%C3%A9roe.jpg"
const papel = "https://png.pngtree.com/png-clipart/20220726/original/pngtree-cartoon-illustration-of-super-paper-hero-saving-the-day-png-image_8405293.png"
const tijera = "https://i.pinimg.com/564x/8b/49/0a/8b490ae7a49234e3c04cac6f941a6d11.jpg"
let pantallaPrev = document.getElementById('previa')
let pantallaPost = document.getElementById('post')
let pantallaPostChange = document.getElementById('postChange')
let bauty = ''
let benja = ''

function jugarBen(dato){
    let x = Math.ceil(Math.random()*3)
    if(x === 1) x = 'piedra'
    if(x === 2) x = 'papel'
    if(x === 3) x = 'tijera'
    let ganador = 'Ganador Bautista'

    if(dato === x) ganador = 'Empate'
    if(dato === 'piedra' && x === 'tijera') ganador = 'Ganador Benjamin'
    if(dato === 'papel' && x === 'piedra') ganador = 'Ganador Benjamin'
    if(dato === 'tijera' && x === 'papel') ganador = 'Ganador Benjamin'
    
    if(dato === 'piedra') benja = piedra
    if(dato === 'papel') benja = papel
    if(dato === 'tijera') benja = tijera

    if(x === 'piedra') bauty = piedra
    if(x === 'papel') bauty = papel
    if(x === 'tijera') bauty = tijera

    
    console.log(pantallaPrev)
    pantallaPrev.style.display = "none";
    pantallaPost.style.display = "grid"
    pantallaPostChange.innerHTML = `
    <div class="container">
        <div class="left">
            <h1>BENJAMIN</h1>
            <div class="cards">
                <div id="piedraBen" style="display:grid ;">
                    <button onclick="jugarBen('piedra')"><img src='${benja}'/></button>
                    <h2>'${dato}'</h2>
                </div>
            </div>
        </div>
        <div class="rigth">
            <h1>BAUTISTA</h1>
            <div class="cards">
                <div id="piedraBau" style="display:grid ;">
                    <button onclick="jugarBau('piedra')"><img src='${bauty}'/></button>
                    <h2>'${x}'</h2>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h1>El resultado es ${ganador}</h1>
        <button onclick="reset()" class="buttonReset">Reiniciar</button>
    </div>
    `
   
    console.log(pantallaPrev)
    console.log(pantallaPost)
}

function jugarBau(dato){
    let x = Math.ceil(Math.random()*3)
    if(x === 1) x = 'piedra'
    if(x === 2) x = 'papel'
    if(x === 3) x = 'tijera'
    let ganador = 'Ganador Benjamin'

    if(dato === x) ganador = 'Empate'
    if(dato === 'piedra' && x === 'tijera') ganador = 'Ganador Bautista'
    if(dato === 'papel' && x === 'piedra') ganador = 'Ganador Bautista'
    if(dato === 'tijera' && x === 'papel') ganador = 'Ganador Bautista'
    
    if(dato === 'piedra') bauty = piedra
    if(dato === 'papel') bauty = papel
    if(dato === 'tijera') bauty = tijera

    if(x === 'piedra') benja = piedra
    if(x === 'papel') benja = papel
    if(x === 'tijera') benja = tijera

    console.log(pantallaPrev)
    pantallaPrev.style.display = "none";
    pantallaPost.style.display = "grid"
    pantallaPostChange.innerHTML = `
    <div class="container">
        <div class="left">
            <h1>BENJAMIN</h1>
            <div class="cards">
                <div id="piedraBen" style="display:grid ;">
                    <button onclick="jugarBen('piedra')"><img src='${benja}'/></button>
                    <h2>'${x}'</h2>
                </div>
            </div>
        </div>
        <div class="rigth">
            <h1>BAUTISTA</h1>
            <div class="cards">
                <div id="piedraBau" style="display:grid ;">
                    <button onclick="jugarBau('piedra')"><img src='${bauty}'/></button>
                    <h2>'${dato}'</h2>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h1>El resultado es ${ganador}</h1>
        <button onclick="reset()" class="buttonReset">Reiniciar</button>
    </div>
    `
   
    console.log(pantallaPrev)
    console.log(pantallaPost)








}

function reset(){
    pantallaPrev.style.display = "grid";
    pantallaPost.style.display = "none"
}
