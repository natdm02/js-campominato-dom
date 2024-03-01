
// FUNZIONE

function createElementGrid(number, cellRow){

// creo un div con una classe specifica
  const element = document.createElement('div');
  
  element.style.width = `calc(100% / ${cellRow})`;
  element.style.height = `calc(100% / ${cellRow})`;

  element.classList.add('square');
  element.innerText = number;
  return element;
}

let cont = 0;

function createGrid(bomb, cellNumber, cellRow){

  cont= 0;

  let grid = document.getElementById('grid');
  
// Creo un if per assicurarmi che non si crei una griglia in più

  if(grid){
      grid.innerHTML = '';
  }

// creo il ciclo for per far uscire i numeri

  for(let i=0; i<cellNumber; i++){
      const square = createElementGrid(i+1, cellRow);
      
// aggiungo la funzione per cambiare il colore al clic
  
      square.addEventListener('click', function(){
          this.classList.toggle('clicked');
          // console.log(`Hai selezionato il numero ${this.innerText}`)

          if(bomb.includes(parseInt(this.innerText))){
                
            // creo il this per cambio colore (rosso) quando esce una bomba
            
            this.classList.add('red');
            
            alert(`BOOM! Hai preso una bomba ${this.innerText}`);
            
            // richiamo la funzione per mostrare tutte le bombe 

            showAllBombs(bomb);
        
            // mostro il punteggio fatto dopo che esce la bomba
        
            document.getElementById('point').innerHTML = `Il tuo punteggio è: ${cont}`;
       
            // associo alla griglia la funzione che non si può fare più nulla dopo una bomba

            grid.classList.add('event-none');
        }  
        else{
            cont++
        }
    });
      
  
// creo un figlio del richiamo della funzione

      grid.appendChild(square);
  }
}


let button = document.getElementById('button');
button.addEventListener('click', function(){

    let difficult = document.getElementById('level').value;

    let arrayBomb = [];


    let cellNumber;
    let cellRow;

    switch(difficult){
        case 'Easy':
            cellNumber = 100;
            cellRow = 10;
            break;

        case 'Medium':
            cellNumber = 81;
            cellRow = 9; 
            break;

        case 'Hard':
            cellNumber = 49;
            cellRow = 7;
            break;

        default:
            cellNumber = 100;
            cellRow = 10;
            break;
    }

    arrayBomb = createArrayBomb(1, cellNumber);
    console.log(arrayBomb)

    
    createGrid(arrayBomb, cellNumber, cellRow);
});


function showAllBombs(bombs_array){
  const cells = document.getElementsByClassName('square');
  for (let i=0; i < cells.length; i++){
      let cell = cells[i];
      if(bombs_array.includes(parseInt(cell.innerText))){
          cell.classList.add('clicked');
          cell.classList.add('red');
     }

  };
}


function createArrayBomb(min, max){
  let bomb = [];
  let i = 0;
  while(i < 16){
      let numberRandom = Math.floor(Math.random() * (max - min +1)+ min);
      if(!bomb.includes(numberRandom)){
          bomb.push(numberRandom);
          i++;
      }
  }
  return bomb;
}





