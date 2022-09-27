function getDay(date, lang) {
    const dayNames = {
        en: {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        },
        ru: {
            0: 'Воскресенье',
            1: 'Понедельник',
            2: 'Вторник',
            3: 'Среда',
            4: 'Четверг',
            5: 'Пятница',
            6: 'Суббота',
        },
    };
    return dayNames[lang][date.getDay()]
}
console.log(getDay(new Date(2022, 1, 1), 'ru')); // Вторник;
console.log(getDay(new Date(2022, 1, 1), 'en')); // Tuesday;
function formatTime(date) {
    let d = date;
    d = [
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join(':') + d.slice(3);
}
console.log(formatTime(new Date(2021, 1, 1, 20, 1))); // 20:01
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2022, 1)); // 28
