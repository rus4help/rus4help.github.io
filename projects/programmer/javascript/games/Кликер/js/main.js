/* Игра Кликер - мой первый опыт */

$(function () {

	// Задаём переменные
	var count = document.querySelector('#count');
	var countSum = document.querySelector('#countSum');
	var countS;
	var save;
	var load;
	var clear;

	var btnOne = document.querySelector('#btn1');
	var btnTen = document.querySelector('#btn2');
	var btnHun = document.querySelector('#btn3');
	var btnSu = document.querySelector('#btn4');

	// Автоматически загружаем данные из локального хранилища, если они есть
	function uploadLocalContent() {
		var countLoad = localStorage.getItem('countAll');
		var countSumLoad = localStorage.getItem('countSumLoaded');

		var displayBtnTen = localStorage.getItem('btnTen');
		var displayBtnHun = localStorage.getItem('btnHun');
		var displayBtnSu = localStorage.getItem('btnSu');

		if (countLoad) {
			document.querySelector("#count").textContent = countLoad;
			document.querySelector("#countSum").textContent = countSumLoad;

			document.querySelector("#btn2").style.display = displayBtnTen;
			document.querySelector("#btn3").style.display = displayBtnHun;
			document.querySelector("#btn4").style.display = displayBtnSu;
			
		} else {
			document.querySelector("#count").textContent = 0;
			document.querySelector("#countSum").textContent = 0;

			document.querySelector("#btn2").style.display = 'none';
			document.querySelector("#btn3").style.display = 'none';
			document.querySelector("#btn4").style.display = 'none';
		}
	
	}	
	uploadLocalContent();
	
	// Функция для сохранения прогресса игры
	save = document.querySelector('#save').addEventListener('click', function () {

		localStorageMy = localStorage.setItem('countAll', countS);
		localStorageMy = localStorage.setItem('countSumLoaded', countSum.textContent);

		// Получаем значения css атрибутов
		btnTen = window.getComputedStyle(btnTen).display;
		btnHun = window.getComputedStyle(btnHun).display;
		btnSu = window.getComputedStyle(btnSu).display;

		btnTen = localStorage.setItem('btnTen', btnTen);
		btnHun = localStorage.setItem('btnHun', btnHun);
		btnSu = localStorage.setItem('btnSu', btnSu);

		// document.querySelector('#load').style.display = 'inline-block';

	});

	// В ручную загружаем данные из локального хранилища, если они есть
	load = document.querySelector('#load').addEventListener('click', function () {

		var countLoad = localStorage.getItem('countAll');
		var countSumLoad = localStorage.getItem('countSumLoaded');

		var displayBtnTen = localStorage.getItem('btnTen');
		var displayBtnHun = localStorage.getItem('btnHun');
		var displayBtnSu = localStorage.getItem('btnSu');

		document.querySelector("#count").textContent = countLoad;
		document.querySelector("#countSum").textContent = countSumLoad;

		document.querySelector("#btn2").style.display = displayBtnTen;
		document.querySelector("#btn3").style.display = displayBtnHun;
		document.querySelector("#btn4").style.display = displayBtnSu;

	});

	// Функция обнуления хранилища данных
	clear = document.querySelector('#clear').addEventListener('click', function () {

		localStorage.clear();
		// window.localStorage.removeItem('countAll');
		window.location.reload();

	});
	
	// Функция для вызова других функций, которые отвечают за кнопки
	function btnAll() {
		btnOne.addEventListener('click', function () {

			countS = count.textContent = +count.textContent + 1;

			console.log(countS);

		});

		btnTen.addEventListener('click', function () {

			countS = count.textContent = +count.textContent + 10;

			console.log(countS);

		});

		btnHun.addEventListener('click', function () {

			countS = count.textContent = +count.textContent + 100;

			console.log(countS);

		});

		btnSu.addEventListener('click', function () {

			countS = count.textContent = +count.textContent + 1000;

			console.log(countS);

		});
	}
	btnAll();

	// Функция для отображения суммы пассивного дохода
	function countSumFunction () {

		if (countS > 10 & countS < 100) {
			countSum.textContent = 1;
		} else if (countS > 100 & countS < 1000) {
			countSum.textContent = 11;
		} else if (countS > 1000 & countS < 10000) {
			countSum.textContent = 111;
		}
	}

	// Функция для отдельного режима игры без интервалов
	function showNextBtn() {

		if (countS > 10 & countS < 100) {

			document.querySelector('#btn2').style.display = 'inline-block';

		} else if (countS > 100 & countS < 1000) {

			document.querySelector('#btn3').style.display = 'inline-block';
			
		} else if (countS > 1000) {

			document.querySelector('#btn4').style.display = 'inline-block';
		} 
	}

	// Функция для работы с интервалами
	function intervalCount() {

		var oneCounter;
		var twoCounter;
		var threeCounter;

		oneCounter = setInterval(function () {

			if (countS > 10 & countS < 100) {

				document.querySelector('#btn2').style.display = 'inline-block';

				clearInterval(oneCounter);
				delete oneCounter;

				twoCounter = setInterval(function () {
					countS = count.textContent = +count.textContent + 1;

					console.log(countS);

					if (countS > 100 & countS < 1000) {

						document.querySelector('#btn3').style.display = 'inline-block';

						clearInterval(twoCounter);
						delete twoCounter;

						threeCounter = setInterval(function () {
							countS = count.textContent = +count.textContent + 11;
							console.log(countS);

							if (countS > 1000) {

								document.querySelector('#btn4').style.display = 'inline-block';

								clearInterval(threeCounter);
								delete threeCounter;

								threeCounter = setInterval(function () {
									countS = count.textContent = +count.textContent + 111;
									console.log(countS);
								}, 1000);

							}

							countSumFunction();

						}, 1000);
					}

					countSumFunction();

				}, 1000);
			}

			countSumFunction();

		}, 1000);

	}
	intervalCount();

});

