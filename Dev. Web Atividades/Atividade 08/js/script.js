function somar(){
    
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let soma = Number(n1) + Number(n2);
    alert("Calculo: "+soma);
};

function subtrair(){
    
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;
    let diminuir = Number(n3) - Number(n4);
    alert("Calculo: "+diminuir);
};

function multiplicar(){
    
    let n5 = document.getElementById("n5").value;
    let n6 = document.getElementById("n6").value;
    let mult = Number(n5) * Number(n6);
    alert("Calculo: "+mult);
};

function dividir(){
    
    let n7 = document.getElementById("n7").value;
    let n8 = document.getElementById("n8").value;
    let dividir = Number(n7) / Number(n8);
    alert("Calculo: "+dividir);
};