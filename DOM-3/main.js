

const setBackground = () => {

    let firstPar = document.querySelectorAll('p.paragraphs')[0];
    let lastPar = document.querySelectorAll('p.paragraphs')[1];
    firstPar.classList.add('paragraph-1');
    lastPar.classList.add('paragraph-2');
   
}

let btnChangeColor = document.getElementById('button-1');
btnChangeColor.addEventListener('click', setBackground);
