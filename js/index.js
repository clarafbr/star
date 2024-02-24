document.addEventListener('DOMContentLoaded', () =>{
    const baseURL = "https://swapi.dev/api/people/"

    fetch(baseURL)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede! Código: '+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        //console.log(data.results[0].name)
        renderizarPersonagens(data);
    })
    .catch((err)=>console.log(err));
})
function renderizarPersonagens(itens){
    const container = document.getElementById('personagem-container');
    itens.results.forEach((item, index) => {
        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML = `
        <div class="personagem-caixa"> 
            <img src="./image/perso${index}.png">
            <div> 
                <h3>${item.name}</h3>
            </div>
        </div>
    `;
     divPersonagens.addEventListener('click', ()=>{
         detalhesPersonagem(index)
     })
    
    divPersonagens.classList.add('personagem')

    container.appendChild(divPersonagens)
    });
    //no lugar do forEach pode utilizar o map
}

function detalhesPersonagem(index){
    window.location.href = `./pages/person.html?index=${index}`
}