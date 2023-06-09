/*
 Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function concessionaria(carro) {
    let carroUp = carro.toUpperCase()
    switch(carroUp) {
        case 'HATCH':
            console.log('venda efetuada com sucesso')
            break
        case 'SEDANS':
        case 'MOTOCICLETAS':
        case 'CAMINHONETES':
            console.log('Tem certeza que quer esse modelo?')
            break
        default:
            console.log('Erro, modelo indisponível')

    }
}

concessionaria('hatch')
concessionaria('Sedans')
concessionaria('Motocicletas')
concessionaria('caminhonetes')
concessionaria('carro')