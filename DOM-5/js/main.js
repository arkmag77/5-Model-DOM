console.log(`Walidacja formularza zapisu do mnewsletter'a `)

let form = document.getElementById('form');
let agreementAllCh = document.getElementById('agrrement-all');

const validate = (event)=>{

    event.preventDefault();
  

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agreement_1 = document.getElementById('agreement-1'); 
    let error = document.getElementById('error');

    error.innerText = ''

    if (name.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz imię i Nazwisko";
        error.appendChild(liError);
    }
    if (email.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz adres email";
        error.appendChild(liError);

    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "Adres email musi zawierać @";
        error.appendChild(liError);

    }

    if (!agreement_1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "Nie wyraziłeś zgody 1";
        error.appendChild(liError);

    }

    if (error.children.length > 0) {
        event.preventDefault();
    }

    console.log(`funkcja validate() -wywołanie`);


    console.log(`ilość błędów ${error.children.length}`);
  
}

const agreementAll = (event) => {

    let agreement_1 = document.getElementById('agreement-1');
    let agreement_2 = document.getElementById('agreement-2');


    agreement_1.checked = event.target.checked;
    agreement_2.checked = event.target.checked;

    agreement_1.disabled = event.target.checked;
    agreement_2.disabled = event.target.checked;


    console.log(agreement_1);
    console.log(agreement_2);
    console.log(`funkcja agreementAll() -wywołanie`);
}

form.addEventListener('submit', validate);

agreementAllCh.addEventListener('change', agreementAll);


