const button = document.querySelector("button")
button.addEventListener("click", login)

async function login(event) {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    if (email === "" || password === "") {
        alert("Preencha todas as informações!")
        return
    }

    const user = {
        email,
        password
    }

    const response = await fetch("https://fullstack-backend-dun.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    //se existir um response.message significa que o usuário errou, portanto mostramos a mensagem ao erro
    if(response.message){
        alert(response.message)
        window.location.reload()
        return
    }

    //se o usuário acertar, guardamos no sessionStorage o id e nome
    const { id, name } = response

    //JSON.stringify converte o objeto em json
    sessionStorage.setItem("user", JSON.stringify({ id, name }))
    alert("Login realizado com sucesso!")

    window.location.href = "../index.html"
}