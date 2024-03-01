
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

function createGrid(cellNumber, cellRow){

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
          console.log(`Hai selezionato il numero ${this.innerText}`)
      });
  
// creo un figlio del richiamo della funzione

      grid.appendChild(square);
  }
}


// 'BONUS'

let button = document.getElementById('button');
button.addEventListener('click', function(){

  let difficult = document.getElementById('level').value;

  let cellNumber;
  let cellRow;

    switch(difficult){
    case 'Easy':
        cellNumber = 100;
        cellRow = 10;

// richiamo funzione 

        createGrid(cellNumber, cellRow);
        break;
    case 'Medium':
        cellNumber = 81;
        cellRow = 9; 

// richiamo funzione 

        createGrid(cellNumber, cellRow);
        break;
    case 'Hard':
        cellNumber = 49;
        cellRow = 7;

// richiamo funzione 

        createGrid(cellNumber, cellRow);
        break;
    default:
        cellNumber = 100;
        cellRow = 10;

// richiamo funzione 

        createGrid(cellNumber, cellRow);
        break;
    }
});



