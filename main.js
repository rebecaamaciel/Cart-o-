// let nomeUsuario= 'Rebeca';
// alert (nomeUsuario);
function soma(numero1,numero2){
    return numero1+numero2;
}
console.log(soma(1,2));
function areaQuadrado(lado){
    return lado**2;
}
console.log(areaQuadrado(6));


let areaTriangulo=function(base,altura){
    return (base*altura)/2;
}
console.log(areaTriangulo(9,6));
   
let MedirMedia1=parseInt(prompt('nota primeiro trimestre'));

let MedirMedia2=parseInt(prompt('nota egundo trimestre'));

let MedirMedia3=parseInt(prompt('nota terceiro trimestre'));
function media(num1,num2,num3){
    return(num1+num2+num3)/3;
}
document.write(media(MedirMedia1,MedirMedia2,MedirMedia3));