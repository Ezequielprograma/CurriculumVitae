function desplegar(){
    if(num == false){
        document.getElementById("infoPersonal").setAttribute("style","display:none;");
        document.getElementById("conocimientos").setAttribute("style","display:none;");
        document.getElementById("repositorio").setAttribute("style","display:none;");
        document.getElementById("masSobreMi").setAttribute("style","display:none;");
        
        num = true;
    }else{
        document.getElementById("infoPersonal").setAttribute("style","display:grid;"); 
        document.getElementById("conocimientos").setAttribute("style","display:grid;"); 
        document.getElementById("repositorio").setAttribute("style","display:grid;"); 
        document.getElementById("masSobreMi").setAttribute("style","display:grid;"); 
        
        num = false;
    }
    
}

function correrFotoPerfil(){
    //document.getElementById("fotoPerfil").setAttribute("style", "transition-property: width, height,top,left,display;transition-duration: 5s, 5s,5s,5s,5s;transition-timing-function: easy-in;width:150px; height:150px; display:flex; position:fixed; top:0px; left:0px;");
  //document.getElementById("bienvenida").setAttribute("style","display:flex;");
}

var num = false;

