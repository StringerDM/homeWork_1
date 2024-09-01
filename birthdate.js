function calculateResults() {
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);

    // Определение дня недели
    const dayOfWeek = getDayOfWeek(day, month, year);
    document.getElementById('dayOfWeek').innerText = 'День недели: ' + dayOfWeek;

    // Проверка високосного года
    const leapYear = isLeapYear(year);
    document.getElementById('leapYear').innerText = 'Високосный год: ' + (leapYear ? 'Да' : 'Нет');

    // Определение возраста
    const age = getAge(day, month, year)
    document.getElementById('age').innerText = 'Ваш возраст: ' + age;

    // Вывод даты звёздочками
    const dateStars = displayDateAsStars(day, month, year);
    document.getElementById('dateStars').innerText = dateStars;
}

function getDayOfWeek(day, month, year) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.toLocaleString('ru-RU', { weekday: 'long' });
    return dayOfWeek;
}

function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function getAge(day, month, year) {
    const today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)) {
        age--;
    }
    return age;
}

function displayDateAsStars(day, month, year) {
    const dateStr = `${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year}`;

    let lines = ['', '', '', '', ''];

    for (const char of dateStr) {
        if (char === ' ') {
            for (let i = 0; i < 5; i++) {
                lines[i] += '   ';
            }
        } else {
            const pattern = digitPatterns[char];
            for (let i = 0; i < 5; i++) {
                lines[i] += pattern[i] + ' ';
            }
        }
    }

    const result = lines.join('\n');
    console.log(result);
    return result;
}

const digitPatterns = {
    '0': ['***', '* *', '* *', '* *', '***'],
    '1': ['  *', '  *', '  *', '  *', '  *'],
    '2': ['***', '  *', '***', '*  ', '***'],
    '3': ['***', '  *', '***', '  *', '***'],
    '4': ['* *', '* *', '***', '  *', '  *'],
    '5': ['***', '*  ', '***', '  *', '***'],
    '6': ['***', '*  ', '***', '* *', '***'],
    '7': ['***', '  *', '  *', '  *', '  *'],
    '8': ['***', '* *', '***', '* *', '***'],
    '9': ['***', '* *', '***', '  *', '***']
};