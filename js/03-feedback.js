import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputRefs = {
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
const FORM_FLOW_VALUE = "feedback-form-state";


form.addEventListener('submit', cleanSubmitForm);
form.addEventListener('input', throttle(inputData, 500));


checkSubmitForm();

function cleanSubmitForm(event) {
    event.preventDefault();
    const savedData = localStorage.getItem(FORM_FLOW_VALUE);
    const parsedSavedData = JSON.parse(savedData);
    console.log(parsedSavedData);

    event.currentTarget.reset();
    localStorage.removeItem(FORM_FLOW_VALUE);
}

function inputData(event) {
    const userData = {
    email: inputRefs.input.value,
    message: inputRefs.textarea.value,
    };
    
    localStorage.setItem(FORM_FLOW_VALUE, JSON.stringify(userData));
}

function checkSubmitForm(event) {
    const savedData = localStorage.getItem(FORM_FLOW_VALUE);
    const parsedSavedData = JSON.parse(savedData);

    if (savedData) {
        inputRefs.input.value = parsedSavedData.email || "";
        inputRefs.textarea.value = parsedSavedData.message || "";
    }
}