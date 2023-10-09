function ver() {
    var hectares = Number(input_hec.value)
    var faturamento = Number(input_fat.value)
    var estado = Number(select_estado.value)
    var perdaP = Number(faturamento * 0.20)
    var perda = Number(faturamento * 0.30)
    var perdaM = Number(faturamento * 0.40)
    div_aparecer.style.display = 'block'
    if (estado == 8 || estado == 10 || estado == 11 || estado == 12 || estado == 23) {
        div_resposta.innerHTML = `De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 30% na produção, totalizando ${perda}$ anualmente</b>, pois, de acordo com o estado que você está localizado, a <b>crise hídrica</b> afeta uma parte considerável da produção.<br>
        O <b>uso eficiente da água</b> é uma ótima ideia, não?`
        if (hectares > 4) {
            div_resposta.innerHTML = `De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 40% na produção, totalizando ${perdaM}$ anualmente</b>, pois, de acordo com o estado que você está localizado e o porte elevado de sua plantação, a <b>crise hídrica</b> pode afetar uma grande parte produção, por conta da bienalidade negativa.<br>
            O <b>uso eficiente da água</b> é uma ótima ideia, não?`
        }
    } else {
        div_resposta.innerHTML = `De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 20% na produção, totalizando ${perdaP}$ anualmente</b>, pois, de acordo com o estado que você está localizado, a <b>crise hídrica</b> pode afetar uma parte considerável da produção.<br>
        O <b>uso eficiente da água</b> é uma ótima ideia, não?`
    }

}