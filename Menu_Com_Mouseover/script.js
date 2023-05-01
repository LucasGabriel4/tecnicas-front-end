// const texts = document.querySelectorAll('.content p > span');
// const links = document.querySelectorAll('.link-block a');


// links.forEach(el => {
  
// el.addEventListener('mouseover', e => {
// texts.forEach(text => text.classList.add('hidden'));

// const id = e.target.getAttribute('href');

// links.forEach(el => {
// el.classList.remove('active');
// });

// e.target.classList.add('active');
// document.querySelector(id).classList.remove('hidden');
// });
// });



 

const links = document.querySelectorAll(".link-block > a")


function MenuComHover(){
   links.forEach(link => {
       link.addEventListener("mouseover", e => {
            links.forEach(link => {
                link.classList.remove("active")
            })

            e.target.classList.add("active")
       })
   })
}

MenuComHover();

