let arrayName = ["Mike", "James", "Brian", "Tina", "Jimmy", "Paul"];

let isTina = false;
let isBrain = false;
let isJim =false;

for(let i = 0; i < arrayName.length; i++){
    if(arrayName[i] === "Tina"){
        isTina = true
    }
    
    if(arrayName[i] === "Tina"){
        isBrian = false
    }
    
    if(arrayName[i] === "Tina"){
        isJim = true
    }
    
}



console.log("Is Tina on the list? Answer: " +isTina )
console.log("Is Brian on the list? Answer: " +isBrian )
console.log("Is Jim on the list? Answer: " +isJim )