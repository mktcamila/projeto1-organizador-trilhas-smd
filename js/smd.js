var availableTags = [
"Introdução a Sistemas e MídiasDigitais",
"História do Design",
"Autoração Multimídia I",
"Programação I",
"Desenho I",
"Cognição e Tecnologias Digitais",
"Matemática Aplicada a Multimídia I",
"Comunicação Visual I",
"Programação II",
"Narrativas Multimídias",
"Interação Humano-Computador",
"Introdução à Cibercultura",
"Autoração Multimídia II",
"Design de Interfaces Gráficas",
"Projeto Integrado I",	
"Metodologia de Pesquisa",
"Análise e Projeto de Sistemas",
"Estruturas de Dados",
"Redes de Computadores",
"Desenho II",
"Fotografia Digital",
"Semiótica Aplicada",
"Engenharia de Software",
"Banco de Dados I",
"Comunicação Visual II",
"Design de Som"
]  

var testaaba = 0;
var conta_trilha1=0;
var conta_trilha2=0;
var conta_trilha3=0;
var conta_trilha4=0;
var conta_trilha5=0;

  $(document).ready(function(){
  	$(".cadeira_ele").hide();
  	$("#pretendidas").hide();
  	$(".cadeira_opc").hide();
  	$('#aba_ob').css("background-color","#43545e");
    $('#aba_ob').css("color","#fff");
    $('#aba_ele').css("background-color","#e5e5e5");
    $('#aba_ele').css("color","#000");
    $('#aba_opc').css("background-color","#e5e5e5");
    $('#aba_opc').css("color","#000");
    

	
	$("#aba_ele").click(function(){
        $(".cadeira_ob").hide();
        $(".cadeira_opc").hide();
        $(".cadeira_ele").show();

        $(this).css("background-color","#43545e");
        $(this).css("color","#fff");
        $('#aba_ob').css("background-color","#e5e5e5");
        $('#aba_ob').css("color","#000");
        $('#aba_opc').css("background-color","#e5e5e5");
        $('#aba_opc').css("color","#000");
        
        if (testaaba == 0){
        	$(".cursadas").show();
        	$(".pretendidas").hide();
        } else{
        	$(".pretendidas").show();
        	$(".cursadas").hide();
        }

        $('#div_pool').microfiche({ slideToPage: 0 });
    });

    $("#aba_opc").click(function(){
        $(".cadeira_ob").hide();
        $(".cadeira_ele").hide();
        $(".cadeira_opc").show();
        $(this).css("background-color","#43545e");
        $(this).css("color","#fff");
        $('#aba_ele').css("background-color","#e5e5e5");
        $('#aba_ele').css("color","#000");
        $('#aba_ob').css("background-color","#e5e5e5");
        $('#aba_ob').css("color","#000");
        if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }

      $('#div_pool').microfiche({ slideToPage: 0 });    

    });
    $("#aba_ob").click(function(){
        $(".cadeira_ob").show();
        $(".cadeira_ele").hide();
        $(this).css("background-color","#43545e");
        $(this).css("color","#fff");
        $('#aba_ele').css("background-color","#e5e5e5");
        $('#aba_ele').css("color","#000");
        $('#aba_opc').css("background-color","#e5e5e5"); 
        $('#aba_opc').css("color","#000");
       
         if (testaaba == 0){
        	$(".cursadas").show();
        	$(".pretendidas").hide();
        } else{
        	$(".pretendidas").show();
        	$(".cursadas").hide();
        }
        $('#div_pool').microfiche({ slideToPage: 0 });

    });
    $("#aba_cursadas").css("background-color","#43545e");
    $("#aba_cursadas").css("color","#fff");
    $("#aba_pretendidas").css("background-color","#e5e5e5");

    $("#aba_cursadas").click(function(){
        testaaba = 0;
        $(".cursadas").show();
        $(".pretendidas").hide();
        $("#aba_cursadas").css("background-color","#43545e");
        $("#aba_cursadas").css("color","#fff");
        $('#aba_pretendidas').css("background-color","#e5e5e5"); 
        $("#aba_pretendidas").css("color","#000");

	});

    $("#aba_pretendidas").click(function(){
       testaaba = 1;
       $(".cursadas").hide();
       $(".pretendidas").show();
       $("#aba_pretendidas").css("background-color","#43545e");
        $("#aba_pretendidas").css("color","#fff");
        $('#aba_cursadas').css("background-color","#e5e5e5"); 
        $("#aba_cursadas").css("color","#000");
	});



$(".cadeira_ob").draggable({
        appendTo: '#destino_disc',
        helper: 'clone',
        
        start: function (event, ui) {
            $(this).hide();
        },
        stop: function (event, ui) {
            $(this).show();
        }
    });
$(".cadeira_ele").draggable({
        appendTo: '#destino_disc',
        helper: 'clone',
        
        start: function (event, ui) {
            $(this).hide();
        },
        stop: function (event, ui) {
            $(this).show();
        }
    });
$(".cadeira_opc").draggable({
        appendTo: '#destino_disc',
        helper: 'clone',
        
        start: function (event, ui) {
            $(this).hide();
        },
        stop: function (event, ui) {
            $(this).show();
        }
    });

$("#destino_disc").droppable({
        accept: '.cadeira_ob, .cadeira_ele, .cadeira_opc',

        drop: function (event, ui) {
            $('#destino_disc').append(ui.draggable);
			
			
			if (testaaba==0){
				$('#destino_disc div:last-child').addClass("cursadas");


			}else
			{
				$('#destino_disc div:last-child').addClass("pretendidas");
			}
			
			if ($("#destino_disc  div:last-child").hasClass("trilha4")){
				conta_trilha4 +=20;
			}
			if ($("#destino_disc div:last-child").hasClass("trilha1")){
				conta_trilha1 += 20;
			}

      if ($("#destino_disc div:last-child").hasClass("trilha5")){
        conta_trilha5 += 20;
      }

			if ($("#destino_disc  div:last-child").hasClass("trilha2")){
				conta_trilha2 += 20;
			}

			if ($("#destino_disc  div:last-child").hasClass("trilha3")){
				conta_trilha3 +=20;
			}

      if(conta_trilha1 == 20){
        $("#status1").empty();
        $("#status1").append("<img src='img/azul20.png'>");

      }
      if(conta_trilha1 == 40){
        $("#status1").empty();
        $("#status1").append("<img src='img/azul40.png'>");

      } 	
      if(conta_trilha1 == 60){
        $("#status1").empty();
        $("#status1").append("<img src='img/azul60.png'>");

      }   
      if(conta_trilha1 == 80){
        $("#status1").empty();
        $("#status1").append("<img src='img/azul80.png'>");

      }   
      if(conta_trilha1 == 100){
        $("#status1").empty();
        $("#status1").append("<img src='img/azul100.png'>");

      }

       if(conta_trilha2 == 20){
        $("#status2").empty();
        $("#status2").append("<img src='img/verde20.png'>");

      }
      if(conta_trilha2 == 40){
        $("#status2").empty();
        $("#status2").append("<img src='img/verde40.png'>");

      }   
      if(conta_trilha2 == 60){
        $("#status2").empty();
        $("#status2").append("<img src='img/verde60.png'>");

      }   
      if(conta_trilha2 == 80){
        $("#status2").empty();
        $("#status2").append("<img src='img/verde80.png'>");

      }   
      if(conta_trilha2 == 100){
        $("#status2").empty();
        $("#status2").append("<img src='img/verde100.png'>");

      }  

      if(conta_trilha3 == 20){
        $("#status3").empty();
        $("#status3").append("<img src='img/lilas20.png'>");

      }
      if(conta_trilha3 == 40){
        $("#status3").empty();
        $("#status3").append("<img src='img/lilas40.png'>");

      }   
      if(conta_trilha3 == 60){
        $("#status3").empty();
        $("#status3").append("<img src='img/lilas60.png'>");

      }   
      if(conta_trilha3 == 80){
        $("#status3").empty();
        $("#status3").append("<img src='img/lilas80.png'>");

      }   
      if(conta_trilha3 == 100){
        $("#status3").empty();
        $("#status3").append("<img src='img/lilas100.png'>");

      }   

       if(conta_trilha4 == 20){
        $("#status4").empty();
        $("#status4").append("<img src='img/vermelho20.png'>");

      }
      if(conta_trilha4 == 40){
        $("#status4").empty();
        $("#status4").append("<img src='img/vermelho40.png'>");

      }   
      if(conta_trilha4 == 60){
        $("#status4").empty();
        $("#status4").append("<img src='img/vermelho60.png'>");

      }   
      if(conta_trilha4 == 80){
        $("#status4").empty();
        $("#status4").append("<img src='img/vermelho80.png'>");

      }   
      if(conta_trilha4 == 100){
        $("#status4").empty();
        $("#status4").append("<img src='img/vermelho100.png'>");

      }  

      if(conta_trilha5 == 20){
        $("#status5").empty();
        $("#status5").append("<img src='img/amarelo20.png'>");

      }
      if(conta_trilha5 == 40){
        $("#status5").empty();
        $("#status5").append("<img src='img/amarelo40.png'>");

      }   
      if(conta_trilha5 == 60){
        $("#status5").empty();
        $("#status5").append("<img src='img/amarelo60.png'>");

      }   
      if(conta_trilha5 == 80){
        $("#status5").empty();
        $("#status5").append("<img src='img/amarelo80.png'>");

      }   
      if(conta_trilha5 == 100){
        $("#status5").empty();
        $("#status5").append("<img src='img/amarelo100.png'>");

      }   


  



			
        }

    });

$("#tags").autocomplete({
source:availableTags
}); 

$("#tags").keyup(function(event){
    if(event.keyCode == 13){
      if (tags.value == "Introdução a Sistemas e MídiasDigitais"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#intro').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

     if (tags.value == "História do Design"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#hist_design').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Autoração Multimídia I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#aut_mult1').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Programação I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#prog1').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Programação I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#prog1').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Desenho I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#desenho1').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Cognição e Tecnologias Digitais"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#cognicao').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Matemática Aplicada a Multimídia I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#mami').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Comunicação Visual I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#cv1').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Programação II"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#prog2').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Narrativas Multimídias"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#narrativas').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Interação Humano-Computador"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#ihc').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Introdução à Cibercultura"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#int_cib').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Autoração Multimídia II"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#aut_mult2').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

     if (tags.value == "Design de Interfaces Gráficas"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#dig').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Projeto Integrado I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#projeto1').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Metodologia de Pesquisa"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","grey");
      $('#aba_ele').css("background-color","white");
      $('#aba_opc').css("background-color","white");
      $('#met_pesquisa').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Análise e Projeto de Sistemas"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#analise_s').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Estruturas de Dados"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#est_dados').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }


    if (tags.value == "Redes de Computadores"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#redes').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

     if (tags.value == "Desenho II"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#desenho2').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Fotografia Digital"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#foto_digital').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Semiótica"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#semiotica').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Engenharia de Software"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#eng_software').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Banco de Dados I"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#banco_dados').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }

    if (tags.value == "Comunicação Visual II"){
      $(".cadeira_ob").hide();
      $(".cadeira_ele").hide();
      $(".cadeira_opc").hide();
      $('#aba_ob').css("background-color","white");
      $('#aba_ele').css("background-color","grey");
      $('#aba_opc').css("background-color","white");
      $('#cv2').show();
      if (testaaba == 0){
          $(".cursadas").show();
          $(".pretendidas").hide();
        } else{
          $(".pretendidas").show();
          $(".cursadas").hide();
        }
    }










        
        
    }
});
$('#div_pool').microfiche();



});








 