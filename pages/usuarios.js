const main = document.querySelector("main")

async function buscarUsuarios() {
    const users = await fetch("https://fullstack-backend-five.vercel.app/").then((response) => response.json())
    users.map(user => {
        main.innerHTML += `
        <section>
            <h2>Nome: ${user.name}</h2>
            <p>Idade: ${user.age} anos</p>
            <p>E-mail: ${user.email}</p>
        </section>
        `
    })
}

buscarUsuarios()