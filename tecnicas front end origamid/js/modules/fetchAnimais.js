import initAnimaNumeros from './animaNumeros.js';

export default function initFetchAnimais(){

    async function fetchAnimais(url){
        const animaisResponse = await fetch(url)
        const animaisJson = await animaisResponse.json();
        const numerosAnimais = document.querySelector('.numeros-grid')
    
        animaisJson.forEach(animal => {
          const divAnimal = createAnimal(animal)
          numerosAnimais.appendChild(divAnimal)
        })
    
        initAnimaNumeros();
    }
    
    
    fetchAnimais("./animaisApi.json")
    
    
    
    
    
    function createAnimal(animal){
      const div = document.createElement('div');
      div.classList.add('numero-animal')
      
      div.innerHTML = `
            <h3>${animal.Specie}</h3>
            <span data-numero>${animal.Total}</span>
      
      `
    
      return div
    }
}

