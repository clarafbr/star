//import data from '../data.json' assert{'type': 'json'};

const data = [
        {
          "id": 1,
          "usuario": "carlos",
          "senha": "123456"
        },
        {
          "id": 2,
          "usuario": "igor",
          "senha": "654321"
        },
        {
          "id": 3,
          "usuario": "leticia",
          "senha": "123654"
        }
]


const btn = document.querySelector('#login')
btn.addEventListener('click', (event)=>{
    event.preventDefault()//parar a funcionalidade do usuário

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    const login = data.find((obj)=>obj.usuario === user && obj.senha === password)//procura o objeto que tem no arquivo "data"

    if(login){
        window.location = '../index.html'
    }else{
        alert(`Usuário não encontrado!`)
    }
})