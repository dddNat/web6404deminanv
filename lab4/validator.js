document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    const dish = document.getElementById("dish").value.trim();
    const animal = document.getElementById("animal").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (!dish || !animal || !age || !email) {
        alert("Все поля должны быть заполнены.");
        return false;
    }

    const ruLetters = /^[А-Яа-яЁё\s]+$/;
    if (!ruLetters.test(dish)) {
        alert("Блюдо должно содержать только буквы русского алфавита.");
        return false;
    }

    if (!ruLetters.test(animal)) {
        alert("Животное должно содержать только буквы русского алфавита.");
        return false;
    }
    
    const isDigit = /^\d+$/;
    if (!isDigit.test(age)) {
    alert("Возраст должен состоять только из цифр.");
    return false;
    }

    const ageNum = parseInt(age, 10);
    if (ageNum < 1 || ageNum > 150) {
        alert("Возраст должен быть целым положительным числом от 1 до 150.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Почтовый адрес должен иметь корректный формат.");
        return false;
    }

    return true;
}
