/*
Fazer um programa para encontrar todos os pares entre 1 e 100
*/

function ApenasPares() {
    for(let i = 1; i < 101;i++){
        if(i % 2 == 0) {
            console.log(i)
        }
    }
}

ApenasPares()