let entradas = document.querySelector("#totalEnt")
let saidas = document.querySelector("#totalSai")

let totalElement = document.querySelector("#total")
let descricoes = document.getElementById('descricoes')

let valorinserido = document.getElementById('inputValor')
let inputdescricao = document.getElementById('inputDesc')
let listaItens = [];

const entrada = document.getElementById('totalEnt')
const saida = document.getElementById('totalSai')

let total = 0; 

function adicionar() {
    if (inputdescricao.value.trim() === '' || valorinserido.value.trim() === '') {
        window.alert('Verifique os campos e tente novamente!');
    } else {
        var radio = detectarRadio()
        let div = ''
        let index = listaItens.length

        let itemd = {
            valorentrada: 0,
            valorsaida: 0,
            div: '',
            index: index,
            cor: '', 
            descricao : ''
        };

        if (radio == 'opcao1') {
            itemd.descricao = inputdescricao.value
            itemd.valorentrada = parseFloat(valorinserido.value);
            total += itemd.valorentrada;
            itemd.cor = 'green'
        } else {
            itemd.descricao = inputdescricao.value
            itemd.valorsaida = parseFloat(valorinserido.value);
            itemd.tipo = 'saida'; 
            total -= itemd.valorsaida; 
            itemd.cor = 'red'
        }

        listaItens.push(itemd);

        div = listaItens.map((item, index) => {
            return `<div id="del" class="produtosF">
                        <h4 class="prod1">${item.div}</h4>
                        <h4 class="prod3">${item.descricao}</h4>
                        <h4 class="prod2">${(item.valorentrada !== 0 ? item.valorentrada : item.valorsaida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                        <i id="icon1" class="fa-regular fa-circle-up" style="color: ${item.cor}"></i>
                    <button id="icon2" onclick="excluir(${index})" class="fa-solid fa-trash"></button>
                    </div>`;
        }).join('');

        entrada.innerHTML = parseFloat(itemd.valorentrada).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        saida.innerHTML = parseFloat(itemd.valorsaida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        inputdescricao.innerHTML = 
        descricoes.innerHTML = div;
        totalElement.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
}}

function excluir(index) {
    let item = listaItens[index];
    if (item.valorentrada !== 0) {
        total -= item.valorentrada; 
    } else {
        total += item.valorsaida; 
    }

    totalElement.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    listaItens.splice(index, 1); 
    renderizarLista();
    
}

function renderizarLista() {
    let div = listaItens.map((item, index) => {
        return `<div id="del" class="produtosF">
                    <h4 class="prod1">${item.div}</h4>
                    <h4 class="prod3">${item.descricao}</h4>
                    <h4 class="prod2">${(item.valorentrada !== 0 ? item.valorentrada : item.valorsaida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                    <i id="icon1" class="fa-regular fa-circle-up" style="color: ${item.cor}"></i>
                    <button id="icon2" onclick="excluir(${index})" class="fa-solid fa-trash"></button>
                </div>`;
    }).join('');

    descricoes.innerHTML = div;
}

function detectarRadio() {
    var opcoes = document.getElementsByName("opcao");
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            return opcoes[i].value;
        }
    }
    return null;
}

function funcionamento(){
    let funciona = document.getElementById('funciona1');
    funciona.innerHTML = `<div id="fechar" class="funciona-overlay">
                              <div class="funciona-content">
                                  <h2>Como Funciona</h2>
                                  <p><strong>Adicionando Transações:</strong> Para começar, você pode adicionar transações clicando no botão "Adicionar Transação". Isso abrirá um formulário onde você pode inserir a descrição da transação e o valor. Certifique-se de selecionar se a transação é uma entrada ou saída de dinheiro usando os botões de opção fornecidos.</p>
                                  <p><strong>Gerenciando Transações:</strong> Todas as transações que você adicionar serão listadas abaixo do formulário de entrada. Cada transação será exibida com sua descrição, valor e um ícone de citação se é uma entrada (representada por um círculo verde) ou uma saída (representada por um círculo vermelho). Você pode excluir uma transação clicando no ícone da lixeira ao lado dela.</p>
                                  <p><strong>Total de Finanças:</strong> O total das suas finanças será exibido no canto superior direito da tela. Este total é atualizado automaticamente conforme você adiciona ou exclui transações.</p>
                                  <button onclick="fechar()">Fechar</button>
                              </div>
                          </div>`
}

function fechar(){
    let divajuda = document.getElementById('fechar')
    divajuda.remove()

}