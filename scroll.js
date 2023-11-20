var positions = [],
    currentActive = null,
    links = $('.scroll-to');

$(".anchor").each(function(){
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

positions = positions.reverse(); 

$(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    for(var i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){
            if(currentActive !== i){
                currentActive = i;
                links.filter('.active').removeClass('active');
                positions[i].a.addClass("active");
            }
            break;
        }
    }
});