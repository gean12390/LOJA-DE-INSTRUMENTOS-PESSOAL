
let botao = false;

function abrir(){   
    
    const mediaQuery = window.matchMedia('(max-width: 450px)');

    if(mediaQuery.matches){
        abrir_mobile();
    }  
    else{
    document.getElementById('menu').style.width = "500px";
    document.querySelector('.inicio').style.display = "flex";
    document.querySelector('.instrumentos').style.display = "flex";
    document.querySelector('.sobre_nos').style.display = "flex";
    document.querySelector('.sobre_nos').style.marginLeft = "73vw";
        delay_abrir();
        delay_abrir_2();
    }
    }

    function fechar(){

        document.getElementById('menu').style.width = "0px";
        document.querySelector('.inicio').style.display = "none";
        document.querySelector('.instrumentos').style.display = "none";
        document.querySelector('.sobre_nos').style.display = "none";
        document.querySelector('.fechar').style.display = "none";

        botao = true;
       fechar_sub();

        const mediaQuery = window.matchMedia('(max-width: 450px)');
   
        if(mediaQuery.matches){
        }
   }

   function abrir_sub() {
        if (botao == false) {
            document.getElementById('menu_sec').style.height = "500px";
            document.getElementById('menu_sec').style.display = "flex";
            botao = true;
            console.log(botao);
            document.querySelector('.sobre_nos').style.display = 'none';

            if (navigator.userAgent.match(/iPhone/i)) {
            document.querySelector('.sobre_nos').style.display = 'none';
            }
        } else if(botao == true) {
            document.getElementById('menu_sec').style.height = "0px";
            document.getElementById('menu_sec').style.display = "none";
            botao = false;
            console.log(botao);
            document.querySelector('.sobre_nos').style.display = 'inline';
            

            if (navigator.userAgent.match(/iPhone/i)) {
                document.querySelector('.sobre_nos').style.display = 'inline';
                document.querySelector('.sobre_nos').style.left.hover = '0vw';

            }
        }
    }

    function fechar_sub(){
        document.getElementById('menu_sec').style.height = "0px";
        document.getElementById('menu_sec').style.display = "none";
        botao = false;
        document.querySelector('.sobre_nos').style.display = 'none';
        
    }


    // MOBILE

    function abrir_mobile(){
        document.getElementById('menu').style.width = "340px";      
        document.querySelector('.inicio').style.display = "flex";
        document.querySelector('.instrumentos').style.display = "flex";
        document.querySelector('.sobre_nos').style.marginLeft = '10vw';
        document.querySelector('.sobre_nos').style.width = '100%';

        if (window.matchMedia('(min-width: 390px)').matches) {
        document.querySelector('.sobre_nos').style.paddingLeft = '18vw';
        }
        else if(window.matchMedia('(max-width: 380px)').matches){
            document.querySelector('.sobre_nos').style.paddingLeft = '22vw';

        }
        delay_abrir();
        delay_abrir_mobile();

    }

    function fechar_mobile(){
        document.getElementById('menu').style.height = "0px";
        document.querySelector('.inicio').style.display = "none";
        document.querySelector('.instrumentos').style.display = "none";
        document.querySelector('.sobre_nos').style.display = "none";
        document.querySelector('.fechar').style.left = "8000px";
        fechar_sub();
    }

// Função que aguarda 0.2 segundos usando async/await
async function delay_abrir() {
    await new Promise(resolve => setTimeout(resolve, 250));
    document.querySelector('.sobre_nos').style.display = "inline";

}
// Função que aguarda 0.23 segundos usando async/await
async function delay_abrir_2() {
    await new Promise(resolve => setTimeout(resolve, 350));
document.querySelector('.fechar').style.display = "flex";
document.querySelector('.fechar').style.left = "75vw";

}
// Função que aguarda 0.23 segundos usando async/await
async function delay_abrir_mobile() {
    await new Promise(resolve => setTimeout(resolve, 350));
document.querySelector('.fechar').style.display = "flex";
document.querySelector('.fechar').style.left = "20vw";

}
