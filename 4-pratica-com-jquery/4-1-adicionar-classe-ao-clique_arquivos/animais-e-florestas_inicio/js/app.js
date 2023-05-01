
// tavegação por tabs

$('[data-group]').each(function(){
    const classActive = 'active'
    const allTarget = $(this).find('[data-target]')
    const allLinks = $(this).find('[data-click]')
    allLinks.first().addClass(classActive)
    allTarget.first().addClass(classActive)
   
    allLinks.click(function(e){
      e.preventDefault()
      let id = $(this).data('click')

      let target = $('[data-target= "' + id + '"]')
      allLinks.removeClass(classActive)
      allTarget.removeClass(classActive)

     target.addClass(classActive)
     $(this).addClass(classActive)
      
   })
    
})





// scroll suave

$('.menu-links a[href^="#"]').click(function(e){
    e.preventDefault()
    const href = $(this).attr('href')
    const menuHeight = $('.menu').innerHeight();
    const targetOffset = $(href).offset().top;
    
    $('html,body').animate({
        scrollTop: targetOffset - menuHeight,
    },500)

})



// scroll suave com link ativo
$('section').each(function(){
    const height = $(this).height()
    const offSetTop = $(this).offset().top
    const id = $(this).attr('id')
    const linksMenu = $('a[href="#'+ id +'"]')
    const menu = $('.menu').innerHeight()
   
   
    $(window).scroll(function(){
        const scrollTopWindow = $(window).scrollTop()
        if(offSetTop - menu < scrollTopWindow && offSetTop + height - menu > scrollTopWindow){
           linksMenu.addClass('active')
        }else{
            linksMenu.removeClass('active')
        }
    })

})



// slide 




function slider(slideName, velocidade){
    let sliderClass = '.' + slideName;
    let activeClass = 'active'
    let next = setInterval(slide, velocidade)

    $(sliderClass).hover(function(){
        clearInterval(next)
    },function(){
        next = setInterval(slide, velocidade)
    })
    $(sliderClass + ' > :first').addClass(activeClass)

    function slide(){
       const  activeSlide = $(sliderClass + ' > .' + activeClass);
        let nextSlide = activeSlide.next();
    
       if(nextSlide.length == 0){
          nextSlide = $(sliderClass + '> :first');
       }
    
       activeSlide.removeClass(activeClass)
       nextSlide.addClass(activeClass)
    
    }

}
    
slider('introducao', 2000)






     let target = $('[data-anime="scroll"]');
     let animationClass = 'animate';
     let offset = $(window).height() * 3/4;

     function animeScroll(){
        let scrolltop = $(document).scrollTop();
        target.each(function(){
            let sectionTop = $(this).offset().top;
            if(scrolltop > sectionTop - offset){
                $(this).addClass(animationClass)
            }else{
                $(this).removeClass(animationClass)
            }
        })
     }

     animeScroll()

     $(document).scroll(function(){
        animeScroll()
        console.log('oi')
     })
