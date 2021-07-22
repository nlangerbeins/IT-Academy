let firstName = prompt('Введите Ваше Имя');
let secondName = prompt('Введите Ваше Отчество');
let lastName = prompt('Введите Вашу Фамилию');
let ageYear = prompt('Укажите Ваш возраст');
let ageDays = ageYear * 365;
let yearsLater = Number(ageYear) + 5;
let gender = confirm('Ваш пол - мужской?');
let retired;

if (gender == true) {
    gender = 'мужской';
} else {
    gender = 'женский';
}

if (gender == true && ageYear >= 67) {
    retired = 'да';
} else {
    retired = 'нет';
}

if (gender != true && ageYear >= 65) {
    retired = 'да';
} else {
    retired = 'нет';
}

alert ('ваше ФИО: ' + firstName + ' ' + secondName + ' ' + lastName + '\n\r ' + 'ваш возраст в годах: ' + ageYear + '\n\r ' + 'ваш возраст в днях: ' + ageDays + '\n\r ' + 'через 5 лет вам будет: ' + yearsLater + '\n\r ' + 'ваш пол: ' + gender + '\n\r ' + 'вы на пенсии: ' + ' ' + retired);


