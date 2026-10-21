const nomeRestaurante = "O Meu Restaurante"; 
const urlAPI = `https://tech4produtos.fly.dev/produtos/restaurante=${nomeRestaurante}`;

async function carregarCardapio() {
    try {
        const resposta = await fetch(urlAPI);
        const produtos = await resposta.json();

        const containerCardapio = document.getElementById("cardapio-container");
        
        if (!containerCardapio) {
            console.error("Contenedor do cardápio não encontrado no HTML.");
            return;
        }

        containerCardapio.innerHTML = "";

        produtos.forEach(produto => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.produto}" width="200">
                <h3>${produto.produto}</h3>
                <p>${produto.descricao}</p>
                <a href="detalhes.html?id=${produto.id}">
                    <button>Ver Detalhes</button>
                </a>
            `;

            containerCardapio.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao carregar os produtos do cardápio:", erro);
    }
}

carregarCardapio();