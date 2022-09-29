function cambiar_foto(){
    
}

function cambiar_parrafo(){
    document.getElementById("edit_texto").style.display = "inline";
    document.getElementById("ocultar_input").style.display = "inline";
    let texto = document.getElementById("text_acerca").innerText;
    console.log(texto);
    }

function cambiar_texto(valor){
    document.getElementById("text_acerca").innerText = valor;
}

function ocultar_input(){
    document.getElementById("edit_texto").style.display = "none";
    document.getElementById("ocultar_input").style.display = "none";
}

function borrar_experiencia_1(){
    let borrar = document.getElementById("exp_1");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}

function borrar_experiencia_2(){
    let borrar = document.getElementById("exp_2");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}

function borrar_experiencia_3(){
    let borrar = document.getElementById("exp_3");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}

function borrar_estudio_1() {
    let borrar = document.getElementById("est_1");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}

function borrar_estudio_2() {
    let borrar = document.getElementById("est_2");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}
function borrar_estudio_3() {
    let borrar = document.getElementById("est_3");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}

function borrar_fyd_1() {
    let borrar = document.getElementById("fyd_1");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}
function borrar_fyd_2() {
    let borrar = document.getElementById("fyd_2");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}
function borrar_fyd_3() {
    let borrar = document.getElementById("fyd_3");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}
function borrar_fyd_4() {
    let borrar = document.getElementById("fyd_4");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}

function borrar_proy_1(){
    let borrar = document.getElementById("proy_1");
    let parent = borrar.parentNode;
    parent.removeChild(borrar);
}
