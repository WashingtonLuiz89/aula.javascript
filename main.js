function clicou(){
   document.getElementById("agradecimento").innerHTML ="Obrigado por Clicar!";
   // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!");
}
function redirecionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse aqui!";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML ="passe o mouse aqui!";
}
function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}

/*function soma(n1,n2){
    return n1 + n2 ;
    }
    var validar =0;
function validaridade(idade){
     if (idade >=18){
    validar = true;
    }else{
        validar =false
    }
return validar;
}
var idade = prompt("Qual e a sua idade");
console.log(validaridade(idade));
/*function soma(n1,n2){
    return n1 + n2 ;
    }
function setReplace(frase, nome , novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("vai japão","japão", "brasil"));


/*var d = new Date();
 alert(d.getMonth());
 alert(d.getDay());
 alert(d.getMinutes());

/*var count;
for(count=0; count<=5;count++){
    alert(count);
}

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
    //count = count +1;
};
/*var nome = "Washington Luiz";
var idade = prompt("qual sua idade");
//var idade = 29;
//var idade2 = 2;
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

/*var frutas = [{nome: "maça", Cor: "Vermelha"},{nome:"uva, cor:"roxa}]
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maçã", "perâ", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
*/
//var frase= "japão eo melhor time do mundo";
//alert(nome+" tem "+ idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("japão", "brasil"));
//alert(frase.replace("japão", "brasil"));
//console.log(frase .toLowerCase());