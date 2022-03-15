function area(){
    let radio = document.getElementById("radio").value;
    radio = parseFloat(radio);
    if(radio>=0){
        let resultado = Math.PI * (radio ** 2);
        alert(resultado);
    }
    else{
        alert("El valor debe ser mayor a 0");
    }

  
}
window.onload = function(){
    document.getElementById("calcular").onclick = area;
}