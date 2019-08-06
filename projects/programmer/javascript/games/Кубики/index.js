/*
* Элементы типа "Node",
* которые выбираются через "querySelector",
* называем с символа - $
* */

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')

var colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#8e44ad', '#155799', '#159957', '#000046', '#1CB5E0', '#2F80ED'] // Задаём массив цветов для игры
var score = 0 // Переменная, для подсчёта кликов по квадрату
var isGameStarted = false // По умолчанию игра не запущена

$start.addEventListener('click', startGame) // Вешаем обработчик события на функцию
$game.addEventListener('click', handleBoxClick) // Вешаем обработчик события на функцию
$gameTime.addEventListener('input', setGameTime) // Вешаем обработчик события на функцию

function show($el) {
    $el.classList.remove('hide')
}
function hide($el) {
    $el.classList.add('hide')
}

function startGame() {
    score = 0 // Обнуляем значение счёта
    setGameTime()
    $gameTime.setAttribute('disabled', true) // Блокируем инпут во время запуска игры
    isGameStarted = true // Игра запущена
    $game.style.backgroundColor = '#fff' // Задаём задний фон белым цветом
    $start.classList.add('hide') // Скрываем кнопку на время игры

    var interval = setInterval(function () {
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            clearInterval(interval) // Останавливаем интервал при окончании игры
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1) // иначе, уменьшаем время на 0.1 секунду
        }
    }, 100)

    renderBox() // Вызываем функцию для генерации квадратиков
}

function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    var time = +$gameTime.value // Устанавливаем время игры и переводим его в число
    $time.textContent = time.toFixed(1)
    show($timeHeader) // Открываем поле - время игры
    hide($resultHeader) // Скрываем поле для вывода результата
}

function endGame() {
    isGameStarted = false // Игра не запущена
    setGameScore() // Вызываем функцию для отображения счёта игры
    $gameTime.removeAttribute('disabled') // Делаем инпут активным после окончания игры
    show($start) // Удаляем элемент скрытия старта игры
    $game.innerHTML = '' // Очищаем игровое поле от лишних квадратов
    $game.style.backgroundColor = '#ccc' // Меняем цвет заднего фона
    hide($timeHeader) // Скрываем поле - время игры
    show($resultHeader) // Открываем поле для вывода результата
}

function handleBoxClick(event) {
    if (!isGameStarted){
        return
    }
    
    if (event.target.dataset.box) { // Если в dataset присутствует ключ box (наш атрибут data-box). И это означает, что мы сделали клик по нашему квадрату
        score++ // Увеличиваем счётчик на 1 при каждом клике по квадрату
        renderBox() // то мы заново генерируем новый квадрат
    }
}

function renderBox() { // Функция для генерации квадратиков
    $game.innerHTML = '' // Очищаем содержимое контейнера при каждой новой генерации квадрата

    var box = document.createElement('div') // Создаём элемень div и помещаем его в переменную box
    var boxSize = getRandom(30, 100) // Создаём переменную с указанными значениями
    var gameSize = $game.getBoundingClientRect() // Получаем данные игрового поля
    var maxTop = gameSize.height - boxSize // Задаём максимальное отклонение от верхней части игрового поля
    var maxLeft = gameSize.width - boxSize // Задаём максимальное отклонение от левой части игрового поля
    var randomColorsIndex = getRandom(0, colors.length)

    // Задаём стили
    box.style.height = box.style.width = boxSize + 'px' // Присваиваем высоте и ширине рандомное значение
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[randomColorsIndex] // Передаём случайный цвет
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'

    box.setAttribute('data-box', 'true') // Добавляется атрибут data-box

    $game.insertAdjacentElement('afterbegin', box) // Вкладываем box в $game
}

function getRandom(min, max) { // Функция для генерации случайного числа в указанном диапозоне
    return Math.floor(Math.random() * (max - min) + min)
}