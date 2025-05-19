const route = 'characters';
var contador = 0;
let minhaLista = [];
fetch(`https://dattebayo-api.onrender.com/${route}`, {//chamdo de api
    method: 'GET', // método para obter dados
    headers: {//
        'Accept': 'application/json',
    },
})
    .then((response) => {
        return response.json();//
    })
    .then((data) => {
        while(contador < 18 ){
            //console.log(data.characters[contador].images[0]);
            //console.log(data.characters[contador].jutsu);
            minhaLista.push(data.characters[contador].id);
            contador ++;
            
        }

        minhaLista.forEach((id) => {
            console.log(id);
            fetch(`https://dattebayo-api.onrender.com/${route}/${id}`,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })    
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })});
    })
    .catch((error) => {
        console.log(error);
    });

     
