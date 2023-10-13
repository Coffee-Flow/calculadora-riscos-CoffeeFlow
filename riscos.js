function arabica() {
    div_limpar.style.display = 'none'
    div_aparecerArabico.style.display = 'block'
  }
  function formularioArabica() {
    var hectaresA = Number(input_hec.value)
    var faturamentoA = Number(input_fat.value)
    var estadoA = Number(select_estado.value)
    var perdaAP = Number(faturamentoA * 0.20)
    var perdaA = Number(faturamentoA * 0.30)
    var perdaAM = Number(faturamentoA * 0.40)
    const venda = Number(perdaA);
    const vendaP = Number(perdaAP);
    const vendaM = Number(perdaAM);
  
    const moedaM = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(vendaM);
  
    const moedaP = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(vendaP);
  
    const moeda = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(venda);
  
    div_arabicaRiscos.style.display = 'block'
    if (estadoA == 8 || estadoA == 10 || estadoA == 11 || estadoA == 12 || estadoA == 23) {
      div_respostaArabica.innerHTML = `<p>De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 30% na produção, totalizando ${moeda} anualmente</b>, pois, de acordo com o estado que você está localizado, a <b>crise hídrica</b> afeta uma parte considerável da produção.<br>
      O <b>uso eficiente da água</b> é uma ótima ideia, não?</p>`
      if (hectaresA >= 3) {
        div_arabicaRiscos.style.height = '300px'
        div_respostaArabica.innerHTML = `<p>De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 40% na produção, totalizando ${moedaM} anualmente</b>, pois, de acordo com o estado que você está localizado e o porte elevado de sua plantação, a <b>crise hídrica</b> pode afetar uma grande parte produção, por conta da possível bienalidade negativa.<br>
              O <b>uso eficiente da água</b> é uma ótima ideia, não?</p>`
      }
    } else {
      div_respostaArabica.innerHTML = `<p>De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 20% na produção, totalizando ${moedaP} anualmente</b>, pois, de acordo com o estado que você está localizado, a <b>crise hídrica</b> pode afetar uma parte considerável da produção.<br>
          O <b>uso eficiente da água</b> é uma ótima ideia, não?</p>`
    }
  
  }
  
  function robusta() {
    div_limpar.style.display = 'none'
    div_aparecerRobusta.style.display = 'block'
  }
  
  function formularioRobusta() {
    var hectaresR = Number(input_hec1.value)
    var faturamentoR = Number(input_fat1.value)
    var estadoR = Number(select_estado1.value)
    var perdaRP = Number(faturamentoR * 0.15)
    var perdaR = Number(faturamentoR * 0.15)
    var perdaRM = Number(faturamentoR * 0.20)
    const venda = Number(perdaR);
    const vendaP = Number(perdaRP);
    const vendaM = Number(perdaRM);
  
    const moedaRM = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(vendaM);
  
    const moedaRP = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(vendaP);
  
    const moedaR = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(venda);
  
    div_robustaRiscos.style.display = 'block'
    if (estadoR == 5 || estadoR == 7) {
      div_robustaResposta.innerHTML = `<p>De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 15% na produção, totalizando ${moedaR} anualmente</b>, pois, de acordo com o estado que você está localizado, a <b>crise hídrica</b> afeta uma parte considerável da produção.<br>
          O <b>uso eficiente da água</b> é uma ótima ideia, não?</p>`
      if (hectaresR >= 3) {
        div_robustaRiscos.style.height = '300px'
        div_robustaResposta.innerHTML = `<p>De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo até 20% na produção, totalizando ${moedaRM} anualmente</b>, pois, de acordo com o estado que você está localizado e o porte elevado de sua plantação, a <b>crise hídrica</b> pode afetar uma grande parte produção, por conta da possível bienalidade negativa.<br>
              O <b>uso eficiente da água</b> é uma ótima ideia, não?</p>`
      }
    } else {
      div_robustaResposta.innerHTML = `<p>De acordo com as informações de sua plantação, hoje, você pode estar <b>perdendo entre 10 e 15% na produção, totalizando ${moedaRP} anualmente</b>, pois, de acordo com o estado que você está localizado, a <b>crise hídrica</b> pode afetar uma parte considerável da produção.<br>
          O <b>uso eficiente da água</b> é uma ótima ideia, não?</p>`
    }
  }