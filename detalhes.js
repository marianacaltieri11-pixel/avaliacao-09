const parametrosURL = new URLSearchParams(window.location.search);
const produtoId = parametrosURL.get("id");

const urlDetalhes = `https://tech4produtos.fly.dev/produtos/${produtoId}`;

async function carregarDetalhesProduto() {
    try {
        if (!produtoId) {
            console.error("ID do produto não foi encontrado no URL.");
            return;
        }

        const resposta = await fetch(urlDetalhes);
        const produto = await resposta.json();

    
        document.getElementById("produto-imagem").src = produto.imagem;
        document.getElementById("produto-nome").innerText = produto.produto;
        document.getElementById("produto-descricao").innerText = produto.descricao;
        document.getElementById("produto-restaurante").innerText = produto.restaurante;

    } catch (erro) {
        console.error("Erro ao carregar os detalhes do produto:", erro);
    }
}

carregarDetalhesProduto();