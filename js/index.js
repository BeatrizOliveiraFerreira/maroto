function maroto() {

var lema = prompt(`Qual é o lema do mapa do maroto?
    Digite 1 para - juro solenemente não fazer nada de bom
    Digite 2 para - juro solenemente evitar o que não é bom
    Digite 3 para - juro solenemente respeitar o lema da minha casa de Hogwarts
    Digite 4 para - juro solenemente só fazer coisas boas
    `)

    if (lema == 1) {
        var um = "Acertou"
        document.write(`<h2> ${um} </h2>`)
    } 

    else if (lema == 2) {
        var dois = "Errou, o correto é:juro solenemente não fazer nada de bom"
        document.write(`<h2> ${dois} </h2>`)
    }

    else if (lema == 3) {
        var tres = "Errou, o correto é:juro solenemente não fazer nada de bom"
        document.write(`<h2> ${tres} </h2>`)
    }

    else if (lema == 4) {
        var quatro = "Errou, o correto é:juro solenemente não fazer nada de bom"
        document.write(`<h2> ${quatro} </h2>`)
    }

    else {
        var errou = "Digite apenas um dos números: 1, 2, 3 ou 4"
        document.write(`<h2> ${errou} </h2>`)
    }

}

