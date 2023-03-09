const datos= 
`
[
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]
`;

// NO PUDE HACER QUE EL JSON FUNCIONE PARA AGARRAR LOS DATOS DIRECTAMENTE DESDE EL ARCHIVO, COPIE Y PEGUE LOS DATOS DE CADA DIA, SIN LLAMARLOS DESDE EL JSON//

console.log (typeof datos);

const jsonDatos= JSON.parse(datos);
console.log(typeof jsonDatos);

const dato = jsonDatos.filter(
    (click) => click.amount == '17.45' 
)

const lunesGrafico = document.querySelector('.grafico_mon');
const martesGrafico = document.querySelector('.grafico_tue');
const miercolesGrafico = document.querySelector('.grafico_wed');
const juevesGrafico = document.querySelector('.grafico_thu');
const viernesGrafico = document.querySelector('.grafico_fri');
const sabadoGrafico = document.querySelector('.grafico_sat');
const domingoGrafico = document.querySelector('.grafico_sun');

const valorLunes = document.querySelector('.value_mon');
const valormartes = document.querySelector('.value_tue');
const valormiercoles = document.querySelector('.value_wed');
const valorjueves = document.querySelector('.value_thu');
const valorviernes = document.querySelector('.value_fri');
const valorsabado = document.querySelector('.value_sat');
const valordomingo = document.querySelector('.value_sun');

lunesGrafico.addEventListener('click', () => {
    mostrarLunes(valorLunes) 
    
} )
martesGrafico.addEventListener('click', () => {
    mostrarMartes(valormartes) 
} )
miercolesGrafico.addEventListener('click', () => {
    mostrarMiercoles(valormiercoles) 
} )
juevesGrafico.addEventListener('click', () => {
    mostrarJueves(valorjueves) 
} )
viernesGrafico.addEventListener('click', () => {
    mostrarViernes(valorviernes) 
} )
sabadoGrafico.addEventListener('click', () => {
    mostrarSabado(valorsabado) 
} )
domingoGrafico.addEventListener('click', () => {
    mostrarDomingo( valordomingo) 
    
} )

valorLunes.addEventListener('click', () => {
    ocultarLunes(valorLunes) 
    
} )
valormartes.addEventListener('click', () => {
    ocultarMartes(valormartes) 
} )
valormiercoles.addEventListener('click', () => {
    ocultarMiercoles(valormiercoles) 
} )
valorjueves.addEventListener('click', () => {
    ocultarJueves(valorjueves) 
} )
valorviernes.addEventListener('click', () => {
    ocultarViernes(valorviernes) 
} )
valorsabado.addEventListener('click', () => {
    ocultarSabado(valorsabado) 
} )
valordomingo.addEventListener('click', () => {
    ocultarDomingo( valordomingo) 
    
} )


function mostrarLunes ( valorLunes) {
    valorLunes.style.display = 'flex';
    valorLunes.innerHTML = '17.45';}

    function mostrarMartes (valormartes){
    valormartes.style.display = 'flex';
    valormartes.innerHTML = '34.91';}
    
    function mostrarMiercoles (valormiercoles){
    valormiercoles.style.display = 'flex';
    valormiercoles.innerHTML = '52.36';}
    
    function mostrarJueves (valorjueves){
    valorjueves.style.display = 'flex';
    valorjueves.innerHTML = '31.07';}
    
    function mostrarViernes (valorviernes){
    valorviernes.style.display = 'flex';
    valorviernes.innerHTML = '23.39';}
    
    function mostrarSabado (valorsabado){
    valorsabado.style.display = 'flex';
    valorsabado.innerHTML = '43.28';}

    function mostrarDomingo (valordomingo){
    valordomingo.style.display = 'flex';
    valordomingo.innerHTML = '25.48';}

    function ocultarLunes ( valorLunes) {
        valorLunes.style.display = 'none';}
    
        function ocultarMartes (valormartes){
        valormartes.style.display = 'none';}
        
        function ocultarMiercoles (valormiercoles){
        valormiercoles.style.display = 'none';}
        
        function ocultarJueves (valorjueves){
        valorjueves.style.display = 'none';}
        
        function ocultarViernes (valorviernes){
        valorviernes.style.display = 'none';}
        
        function ocultarSabado (valorsabado){
        valorsabado.style.display = 'none';}
    
        function ocultarDomingo (valordomingo){
        valordomingo.style.display = 'none';
        }
    

    

// CREO QUE TODO ESTE CODIGO LO PUEDO SIMPLIFICAR EN MENOS LINEAS//
