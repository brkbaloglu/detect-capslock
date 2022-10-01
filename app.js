const eInput = document.querySelector('.eInput input');
const lock = document.querySelector('.eInput .icon');
const error = document.querySelector('.error-msg');


eInput.addEventListener('keyup', function(event) {
    if (event.getModifierState('CapsLock')) {
        error.style.display = 'block';
        lock.style.display = 'block';
    } else {
        error.style.display = 'none';
        lock.style.display = 'none';
    }
})