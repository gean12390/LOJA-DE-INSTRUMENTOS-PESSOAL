    let botao = false;


function fechar(){
     document.getElementById('menu').style.width = "0px";
     document.querySelector('.inicio').style.display = "none";
     document.querySelector('.instrumentos').style.display = "none";
     document.querySelector('.sobre_nos').style.display = "none";
     botao = true;
     abrir_sub();
}

function abrir(){    
    document.getElementById('menu').style.width = "500px";
    document.querySelector('.inicio').style.display = "flex";
    document.querySelector('.instrumentos').style.display = "flex";
    document.querySelector('.sobre_nos').style.display = "flex";
    }



    function abrir_sub() {
        if (botao == false) {
            document.getElementById('menu_sec').style.height = "500px";
            document.getElementById('menu_sec').style.display = "flex";
            botao = true;
            console.log(botao);
        } else if(botao == true) {
            document.getElementById('menu_sec').style.height = "0px";
            document.getElementById('menu_sec').style.display = "none";
            botao = false;
        }
    }
    
