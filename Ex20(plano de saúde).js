/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function PlanoDeSaude(idade) {
    if (idade <= 10) {
        console.log('Seu plano vai ser R$180,00')
    }else if (idade <= 30) {
        console.log('Seu plano vai ser R$150,00')
    }else if (idade <=60) {
        console.log('Seu plano vai ser R$195,00')
    }else
    console.log('Seu plano vai ser R$230,00')
}

PlanoDeSaude(9)
PlanoDeSaude(15)
PlanoDeSaude(35)
PlanoDeSaude(65)
