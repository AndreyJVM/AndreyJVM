// Функция для загрузки текстов
async function loadLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const data = await response.json();
    return data;
}

// Функция для обновления текстов на странице
function updateTexts(data) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = data[key.split('.')[0]][key.split('.')[1]];
    });
}

// Инициализация языка по умолчанию
let currentLang = 'en';

// Загрузка текстов и обновление страницы
loadLanguage(currentLang).then(data => {
    updateTexts(data);
});