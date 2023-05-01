export default function initToolTip(){

}


const tooltips = document.querySelectorAll('[data-tooltip]')


tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseover)
})




 function onMouseover(e){
  const tooltipBox = criarTooltipBox(this)
 

  
  this.addEventListener('mousemove', onMousemove)

  
  function onMousemove(e){
    tooltipBox.style.top = e.pageY + 20 + "px";
    tooltipBox.style.left = e.pageX + 20 +"px";

  }
  
 
 

  this.addEventListener('mouseleave', onMouseLeave)

  function onMouseLeave(){
    tooltipBox.remove()
    this.removeEventListener('mouseleave', onMouseLeave)
    this.removeEventListener('mousemove', onMousemove)
 
  }


 }



//  onMouseLeave.tooltipBox = tooltipBox

//  const onMouseLeave = {
//     tooltipBox: '',
//     handleEvent(){
//        this.tooltipBox.remove();
//     }
//  }



 function criarTooltipBox(element){
  const tooltipBox = document.createElement('div')
  tooltipBox.classList.add('tooltip')
  const text = element.getAttribute('aria-label')
  tooltipBox.innerText = text
  document.body.appendChild(tooltipBox)
  return tooltipBox
 }

