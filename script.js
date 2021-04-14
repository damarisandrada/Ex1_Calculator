let nr1 = Number(prompt("Introduceti primul numar:"));
let nr2 = Number(prompt("Introduceti al doilea numar:"));
let op = prompt("Introduceti operatia:");
let rezultat;


switch(op){
    case "+" :{
        rezultat = nr1 + nr2;
        break;
    }
    case "-" :{
        rezultat = nr1 - nr2;
        break;
    }
    case "*":{
        rezultat = nr1 * nr2;
        break;
    }
    case "/":{
        rezultat = nr1 / nr2;
        break;
    }
}
console.log(rezultat);
