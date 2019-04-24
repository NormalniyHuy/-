$(window).scroll(function() {
    // use the value from $(window).scrollTop(); 
});

$('.swupButton').click(function(){
    
    //$('#firstEmployee').hide('Example.html #firstEmployee');
    $('#firstEmployee').hide('slow', function() {
        $('#secondEmployee').removeClass('divOff');
    });

    $('#secondEmployee').show('slow', function() {
        $('#firstEmployee').addClass('divOff');
    });
});
