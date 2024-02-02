const form = document.getElementById('form_id');
const form_submit_btn = document.getElementById('submit_btn');

form_submit_btn.addEventListener('click', validateForm);

function validateForm(e) {
    const inputs = Array.from(form.elements);
    const password_warning = document.getElementById('password_valid_label');

    if (inputs[4].value !== inputs[5].value){
        password_warning.classList.remove('hide');
        e.preventDefault();
    }
};