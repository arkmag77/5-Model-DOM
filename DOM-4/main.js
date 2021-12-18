const submitForm = (event) => {

    event.preventDefault();
    let firstName = document.querySelectorAll('input')[0];
    let lastname = document.querySelectorAll('input')[1];

    console.log(`Imię: ${firstName.value}, Nazwisko: ${lastname.value}`);
}

let form = document.querySelector('form');
form.addEventListener('submit', submitForm);