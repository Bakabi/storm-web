window.onload = function() {
    console.log("OLAAAA MUNDO")

    let meuForm = $("#formProduto")

    console.log(meuForm)

    meuForm.on("submit", function(event){
        event.preventDefault()
        console.log("clicou")
        prepararBotao()
    })

    function prepararBotao() {
        let botao = $("button#btnSalvar")
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }

    function clicou(){
        prepararBotao()
    }
}