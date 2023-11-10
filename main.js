function tocaSomPom(){document.queryselector('#som_tecla_pom').play('');}
const elemento = document.queryselector(selectorAudio)


const listaDeTeclas =document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){


const tecla = listaDeTeclas[contador]

const instrumento = tecla.classList[1];

const idAudio = '#som_${instrumento}';}

tecla.onclick = function{
    tocaSomPom (idAudio);
};

tecla.onekeydown = function(evento){
    if(evento.code === 'space' || evento.code === 'Enter'){
        tecla.ClassList.add('ativa');
    }
}
tecla.onkeyup = function(evento){
    tecla.classList.remove
}
document.querySelector('tecla_pom');
document.queryselector('#som_tecla_pom').play('');
document.queryselector('.tecla_pom').onclick = tocaSomPom