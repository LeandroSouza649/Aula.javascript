/*
const myPromise = new Promise((resolve, reject) => {
    const nome = "leandro"

    if(nome === "Guilherme"){ {
 
        resolve("Usuario encontrado");}
    } else {
        reject("Usuario não encontrado");
    }
})

myPromise.then((sucess) =>{
    console.log("Obrigado,",sucess);
}).catch((error) => {
    console.log("tente novamente,", error);
}) 
*/
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "aguarde 2 segundos")
})
const myPromise3 = new Promise((resolve, reject) => {
    resolve("imediato")
})

const resolveAll = Promise.all([myPromise2, myPromise3])
.then((result) => {
    console.log(result)
})

const resolveRace = Promise.race([myPromise2, myPromise3])
.then((result) => {
    console.log(result)
})