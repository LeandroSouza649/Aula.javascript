const route = 'characters';
var contador = 0;
fetch(`https://dattebayo-api.onrender.com/${route}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        while(contador < 18 ){
            console.log(data.characters[contador].images[0]);
            console.log(data.characters[contador].jutsu);
            console.log(data.characters[contador].id[contador]);
            contador ++;
            
        }
    })
    .catch((error) => {
        console.log(error);
    })