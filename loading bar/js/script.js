const container = document.querySelector(".container")
const output = document.querySelector(".output")
const fill = document.querySelector(".fill")
const counter = document.querySelector(".counter")
const btn = document.querySelector("button")

btn.addEventListener('click', () => {
    let count = 0;
    let progressBar = setInterval(progress, 50)

    function progress(){
     count+= 1;

     if(count > 100){
        clearInterval(progressBar)
        container.style.display = 'none'
        output.style.display = 'block'
     }else{
         counter.textContent = `${count}%`;
         fill.style.width = `${count}%`
     }
    }

    
})

