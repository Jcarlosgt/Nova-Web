$(document).ready(function(){

    var inicio = $('#inicio').offset().top,
        acercade = $('#acerca-de').offset().top,
        servicios = $('#servicios').offset().top,
        contacto = $('#contacto').offset().top;


        $('#btn-sobre').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercade 
            }, 500);
        });
        
        $('#btn-servicios').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: servicios 
            }, 500);
        });
        
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto 
            }, 500);
        });

        $('#btn-inicio-f').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: inicio 
            }, 500);
        });
        
        $('#btn-sobre-f').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercade 
            }, 500);
        });

        $('#btn-servicios-f').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: servicios 
            }, 500);
        });

        $('#btn-contacto-f').on('click', function(e){
            e.preventDefault();
        });

        function scrollAnimate (){
            $('#btn-scroll').animate({
                opacity:0,         
            },3000);
            $('#btn-scroll').animate({
                opacity:1,         
            },3000);
        }

        setInterval(scrollAnimate,2000);
        

        $('#btn-scroll').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercade 
            }, 500);
        });



        
});