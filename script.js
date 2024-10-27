let expressao = '';

function adicionarnumero(numero) {
    expressao += numero;
    document.getElementById('tela').value = expressao
}
function limpartela() {
    expressao = '';
    document.getElementById('tela').value = '';
}
function apagarultimo() {
    expressao = expressao.slice(0, -1);
    document.getElementById('tela').value = expressao;
}
function calcular() {
    try {
        let resultado = eval(expressao)
        document.getElementById('tela').value = resultado;
        expressao = resultado.toString();
    } catch (e) {
        document.getElementById('tela').value = 'Erro';
        expressao = '';
    }
}