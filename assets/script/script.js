const itens = [{
    id: 0,
    nome: 'Camiseta',
    img: './assets/img/shirt-mockup2.jpg',
    quantidade: 0
},
{
    id: 1,
    nome: 'Short',
    img: './assets/img/Free-boxer-shorts-mockup.jpg',
    quantidade: 0
},
{
    id: 2,
    nome: 'Calça',
    img: './assets/img/mockup-pants.jfif',
    quantidade: 0
},
{
    id: 3,
    nome: 'Calça',
    img: './assets/img/mockup-pants.jfif',
    quantidade: 0
},
{
    id: 4,
    nome: 'Calça',
    img: './assets/img/mockup-pants.jfif',
    quantidade: 0
},
{
    id: 5,
    nome: 'Calça',
    img: './assets/img/mockup-pants.jfif',
    quantidade: 0
},
]


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val) => {
        containerProdutos.innerHTML += `

    <div class="produto-single">
        <img src="` + val.img + `"/>
        <p>` + val.nome + `</p>
        <a key="` + val.id + `" href="#">Adicionar ao carrinho!</a>
     </div>
    
    `;
    })
}

inicializarLoja();


atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
        <div class="info-single-checkout">
   <p style="float:left;">Produto: ` + val.nome + `</p>
   <p style="float:right;">Quantidade: ` + val.quantidade + `</p>
   <div style="clear:both;"></div>
   </div>
    `;
        }
    })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho()
        return false;
    })
}