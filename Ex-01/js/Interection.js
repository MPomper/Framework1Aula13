$(document).ready(function()
{
    setInterval(function(){
        $(".Blink").fadeOut(3000);
        $(".Blink").fadeIn(3000);
    });
});

function SearchMateria(input)
{
    var input = document.getElementById(input);

    if(input.value.toUpperCase() == 'IA')
    {
        clean();
        $('.segunda').css('background', 'red');
        $('.segunda').css('color', 'white');
    }
    else if(input.value.toUpperCase() == 'MATEMATICA')
    {
        clean();
        $('.terca').css('background', 'red');
        $('.terca').css('color', 'white');
    }
    else if(input.value.toUpperCase() == 'ESTRUTURA DE DADOS')
    {
        clean();
        $('.quarta').css('background', 'red');
        $('.quarta').css('color', 'white');
    }
    else if(input.value.toUpperCase() == 'DESENVOLVIMENTO DE FRAMEWORK 2')
    {
        clean();
        $('.quinta').css('background', 'red');
        $('.quinta').css('color', 'white');
    }
    else if(input.value.toUpperCase() == 'EMPREEMDEDORISMO')
    {
        clean();
        $('.sexta').css('background', 'red');
        $('.sexta').css('color', 'white');
    }
}

function clean()
{
    $('.Dias').css('background', 'white');
    $('.Dias').css('color', 'black');

    $('.Room').css('background', 'white');
    $('.Room').css('color', 'black');
}