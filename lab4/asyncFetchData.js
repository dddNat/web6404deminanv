async function fetchData() {
    const url = 'http://127.0.0.1:8000/home'; 
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        displayFacts(data.characters);
    } catch (error) {
        alert('Не удалось получить данные. Попробуйте позже.');
    }
}

function displayFacts(characters) {
    const items = document.querySelectorAll('.item');
            
    items.forEach((item, index) => {
        const factsList = item.querySelector('.facts');
        factsList.innerHTML = '';

        const character = characters[index];
        character.facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            factsList.appendChild(li);
        });
    });
}