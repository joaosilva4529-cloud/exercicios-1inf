const Contratante="MarcosTeixeira"
const Pacote="PacotePrata"
const Valorporhora=200
const Horasdefesta=4
const Mesasnecessárias=10
const Mesasdisponívei=15
const Valorpago=800
const valorDesconto=100
const ValorBase=(Valorporhora*Horasdefesta)
if(Mesasnecessárias<=15){
    console.log("Salão comporta o evento")
} else{
    console.log("Salão não comporta o evento")
}
if(Horasdefesta>=6) {
    console.log("100 reais de desconto")
} else{
    console.log("Sem desconto")
}
const Valorfinal=(ValorBase-valorDesconto)






