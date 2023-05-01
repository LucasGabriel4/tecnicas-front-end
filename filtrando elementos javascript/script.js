const filterInput = document.getElementById('filter')
const cards = document.querySelectorAll('.cards > li')


filterInput.addEventListener('input', filter)


function filter(event){
   const filterValue = event.target.value;
   
   if(filterValue !== ''){
     cards.forEach((card) => {
        let title = card.querySelector('h2').textContent
        title = title.toLowerCase();

        filterValue.toLowerCase()
     
        if(!title.includes(filterValue)){
           card.style.display = 'none'
        }else{
           card.style.display = 'block'
        }
      })
    
  
   }else{
      cards.forEach((card) => {
        card.style.display = 'block';
      })
   }
}