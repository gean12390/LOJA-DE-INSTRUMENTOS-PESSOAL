function pesquisar(event) {

    if (event.key === 'Enter') {


        let pesquisa = document.getElementById('pesquisa').value.toLowerCase();
        let resposta = document.getElementById('resposta');

        // GIBSON
        let gibson_res = ["gibson", "gi", "gib", "gibs", "gibso", "les", "lespaul", "les paul", "1959", "1959 les paul standard factory burst ultra light aged, factory burst", "les paul standard", "standard"];
        let gibson = `<div class="item_1"><img src="imagens/gibson.png" class="gibson" style="width: auto; margin-left: 15px;"><p class="guitarra_1">1959 Les Paul Standard Factory Burst Ultra Light Aged, Factory Burst</p><p class="preco" style="margin-top: 3vh; margin-left: 4.3vw;">R$38.584,03</p></div>`;

        // FENDER
        let fender = ["fender", "produtos fender", "fend", "fende", "fend", "fe", "fen"];
        let guitarra_fender = ["guitarra fender", "guitarra f","guitar fender", "guitarra fe", "guitarra fen", "guitarra fend", "guitarra fende", "tele", "fender tele", "telecaster", "Made in Japan Limited Hybrid II Fender - Telecaster®, Noir", "made in japan limited hybrid ii fender - telecaster®, noir", "made in japan", "made in japan limited hybrid ii", "made", "made in", "fender telecaster", "fender tele", "fender telecaster made in japan", "telecaster fender", "fender japan", "fender hybrid ii telecaster", "fender noir telecaster", "fender telecaster noir", "telecaster noir fender", "fender telecaster limited edition", "fender telecaster made in japan limited", "telecaster made in japan limited", "fender telecaster hybrid", "telecaster hybrid fender", "fender hybrid telecaster", "fender telecaster japan", "telecaster japan fender", "japanese fender telecaster", "fender telecaster japan limited", "fender telecaster hybrid ii", "fender telecaster hybrid ii limited", "fender telecaster noir japan", "telecaster noir japan fender", "fender telecaster noir hybrid", "telecaster noir hybrid fender", "fender telecaster limited hybrid", "telecaster limited hybrid fender", "limited hybrid fender telecaster", "fender telecaster noir limited hybrid", "telecaster noir limited hybrid fender"];
        let baixo_fender = ["contra-baixo", "contra baixo","baixo", "ba", "bai", "baix", "baixo fender", "fender baixo", "American Professional II Jazz Bass", "american professional ii jazz bass", "american professional" , "professional", "bass", "jazz", "professional ii", "professional II", "pro", "prof", "profe"];
        let violao_fender = ["violao fender", "fender violao", "violao", "vio", "viol", "viola", "violao f", "violao fe", "violao fen", "violao fend", "violao fende", "Redondo Special", "redondo special", "redondo", "special",  "redondo special fender", "red", "redo", "redon", "redond", "violão", "violao preto", "violçao preto"];
       
        let fender_baixo = `<a href="#" class="item_1"><div class="item_1"><img src="imagens/baixo_fender.jpg"><p class="guitarra_1" id="baixo">American Professional II Jazz Bass</p><p class="preco">R$19.073,44</p></div></a>`;
        let fender_violao = `<div class="item_1"><img src="imagens/violao_fender.jpg" class="fender" style="width: 80%; margin-left: 30px;"><p class="guitarra_1">Redondo Special</p><p class="preco" style="margin-top: 5vh; margin-left: 4.3vw;">R$6.291,00</p></div>`;
        let fender_guitarra = `<div class="item_1"><img src="imagens/fender_1.jpg"><p class="guitarra_1">Made in Japan Limited Hybrid II Fender - Telecaster®, Noir</p><p class="preco">R$7.132,87</p></div>`;
        let fender_res = [fender_guitarra , fender_baixo , fender_violao];


        // IBANEZ
        let ibanez = `<div class="item_1"><img src="imagens/ibanez_1.jpg"><p class="guitarra_1">IBANEZ - RG GIO GRX70QA</p><p class="preco" style="margin-top: 5.3vh; margin-left: 4.3vw;">R$2.044,00</p></div>`;

        // JACKSON
        let jackson = `<div class="item_1"><img src="imagens/jackson_1.png"><p class="guitarra_1">JACKSON - X SERIES DINKY® DK1A</p><p class="preco">R$7.516,82</p></div>`;

        // GUITARRAS 
        let guitarras = [fender_guitarra, gibson, ibanez, jackson];
        let guitarras_res = ["gu", "gui", "guit", "guit", "guita", "guitar", "guitarr", "guitarra", "guitarras"]

        if (pesquisa === "") {
            alert("Não foi possivel encontrar :(");
        } else if(gibson_res.includes(pesquisa)){
            resposta.innerHTML = gibson;
        } else if(fender.includes(pesquisa)){
            resposta.innerHTML = fender_res.join('');
        } else if(guitarra_fender.includes(pesquisa)){
            resposta.innerHTML = fender_res[0];
        } else if(baixo_fender.includes(pesquisa)){
            resposta.innerHTML = fender_res[1]; 
        } else if(violao_fender.includes(pesquisa)){

        resposta.innerHTML = fender_res[2];

                if (window.matchMedia('(max-width: 450px)').matches) {
                    document.querySelector('.fender').style.width  = 'auto';
                    document.querySelector('.fender').style.marginLeft  = '23vw';
                    document.querySelector('.preco').style.marginLeft  = '33vw';
                    document.querySelector('.preco').style.marginTop  = '40px';

                } else {            

                    document.querySelector('.fender').style.width  = '80%';
                    document.querySelector('.fender').style.marginLeft  = '30px';

                }
        } else if(guitarras_res.includes(pesquisa)){
            resposta.innerHTML= guitarras.join('');
        }  else{
            alert("Não foi possivel encontrar :(");

        }

    }
    document.getElementById('baixo').style.marginLeft = '2vw';
}



function pesquisaporclick_guitarras(){


    let fender_guitarra = `<div class="item_1"><img src="imagens/fender_1.jpg"><p class="guitarra_1">Made in Japan Limited Hybrid II Fender - Telecaster®, Noir</p><p class="preco">R$7.132,87</p></div>`;
    let ibanez = `<div class="item_1"><img src="imagens/ibanez_1.jpg"><p class="guitarra_1">IBANEZ - RG GIO GRX70QA</p><p class="preco" style="margin-top: 5.3vh; margin-left: 4.3vw;">R$2.044,00</p></div>`;
    let jackson = `<div class="item_1"><img src="imagens/jackson_1.png"><p class="guitarra_1">JACKSON - X SERIES DINKY® DK1A</p><p class="preco">R$7.516,82</p></div>`;
    let gibson = `<div class="item_1"><img src="imagens/gibson.png" class="gibson" style="width: auto; margin-left: 15px;"><p class="guitarra_1">1959 Les Paul Standard Factory Burst Ultra Light Aged, Factory Burst</p><p class="preco" style="margin-top: 3vh; margin-left: 4.3vw;">R$38.584,03</p></div>`;

    let guitarras = [fender_guitarra, gibson, ibanez, jackson];


        document.getElementById('resposta').innerHTML= guitarras.join('');
    }

function pesquisaporclick_baixos(){
    let fender_baixo = `<div class="item_1"><img src="imagens/baixo_fender.jpg"><p class="guitarra_1" style="margin-right: 15px">American Professional II Jazz Bass</p> <p class="preco" style="margin-top: 3.5vh; margin-left: 4.3vw;">R$19.073,44</p></div>`;

    document.getElementById('resposta').innerHTML= fender_baixo;


}

function pesquisaporclick_viloes(){
    let fender_violao = `<div class="item_1"><img src="imagens/violao_fender.jpg" class="fender" style="width: 80%; margin-left: 30px;"><p class="guitarra_1">Redondo Special</p><p class="preco" style="margin-top: 5vh; margin-left: 4.3vw;">R$6.291,00</p></div>`;

    document.getElementById('resposta').innerHTML= fender_violao;

    if (window.matchMedia('(max-width: 450px)').matches) {
        document.querySelector('.fender').style.width  = 'auto';
        document.querySelector('.fender').style.marginLeft  = '23vw';


    } else {            

        document.querySelector('.fender').style.width  = '80%';
        document.querySelector('.fender').style.marginLeft  = '30px';

    }

}