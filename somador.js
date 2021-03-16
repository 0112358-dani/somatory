function calcular() {
    let n1 = Number(document.getElementById('numTxt').value)
    let n2 = Number(document.getElementById('numTxtd').value)
    let n3 = Number(document.getElementById('numTxtt').value)
    let n4 = Number(document.getElementById('numTxtq').value)
    let res = document.getElementById('res')
    let s = n1 + n2 + n3 + n4
    let maior = n1

 if (n2 > n1) {
    maior = n2
} if (n3 > n2) {
    maior = n3
} if (n4 > n3) {
    maior = n4

    
    res.innerHTML = `A soma de todos os valores foi ${s} e o maior valor digitado foi ${maior} \u{1F5A9}`
}}
