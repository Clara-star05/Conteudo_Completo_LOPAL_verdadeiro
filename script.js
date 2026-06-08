// Fazer o botâo funcionar
function entrar() {
    alert("Bem-vindo ao Restaurante サンシャイン (Sanshain)");

    menu();
}

//Variavel Constante e global - para entrega

    const taxaentrega = 5;
    let total = 0;
    
    //Aqui é o menu
    function menu() {
        let continuar = true;
    
        while (continuar){
            let opcao = prompt(
       "   Cardápio   \n" +
        "1 - Sushis: R$2\n" +
        "2 - Sashimis: R$2\n" +
        "3 - Ramen (Lámen): R$18\n" +
        "4 - Guioza: R$3\n " +
        "5 - Tempurá:  R$10\n " +
        "6 - Yakisoba:  R$19\n " +
        "7 - Missoshiru: R$19\n " +
        "8 - Tonkatsu: R$22 \n" +
        "9 - Água c/ gás: R$5\n " +
        "10 - água: R$5\n" +
        "11 - Refrigerante: R$10\n" +
        "12 - Suco de uva: R$8\n"+
     " Digite 0 para finalizar o pedido."
    );

    //Serve para escolher entre várias opções, para não criar mil ifs.
        switch(opcao) {

            case "1": total += 2; alert("Sushis"); break;
            case "2": total += 2; alert("Sashimis"); break;
            case "3": total += 18; alert("Ramen (Lámen)"); break;
            case "4": total += 3; alert("Guioza"); break;
            case "5": total += 10; alert("Tempurá"); break;
            case "6": total += 19; alert("Yakisoba");break;
            case "7": total += 19; alert("Missoshiru"); break;
            case "8": total += 22; alert("Tonkatsu"); break;
            case "9": total += 5; alert("Água c/ gás"); break;
            case "10": total += 5; alert("Água"); break;
            case "11": total += 10; alert("Refrigerante"); break;
            case "12":  total += 8; alert("suco de uva"); break;
           // break é para parar de executar
            case "0": continuar = false; break; // isso faz sair do loop
         // quando da erro
            default: alert("Opção inválida. Tente novamente.");
     
    }
}
        let desconto = 0;
            if (total >= 150) {
            desconto = total * 0.10;          // calcula 10%
            alert("Você ganhou 10% de desconto! Economia de R$" + desconto.toFixed(2));
    }       else {
                 alert("Sem desconto. (Pedidos acima de R$150 ganham 10% off!)");
    }

    let totalComDesconto = total - desconto;
      alert(
         "----- RESUMO DO PEDIDO -----\n" +
        "Subtotal: R$" + total + "\n" +
        "Taxa de entrega: R$" + taxaentrega + "\n" +
        "Total final: R$" + (total + taxaentrega)
    );
}
    
     
   