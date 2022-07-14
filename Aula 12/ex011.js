let idade = 66

console.log(`Você tem ${idade} anos de idade.`)
if (idade < 16) {
    console.log('Voto não obrigatorio.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatorio')
}