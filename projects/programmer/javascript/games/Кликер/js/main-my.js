/* Технология AJAX */

// document.addEventListener('DOMContentLoaded', function (event) {

// 	var countLoad = localStorage.getItem('countAll');
// 	document.querySelector("#count").textContent = countLoad;

// 	intervalCount();


// });


$(function () {

    // $('#button1').on('click', function (event) {
    // 	$('#resoult').load('./sections.html #section1');
    // });

    // $('#button2').on('click', function (event) {
    // 	$('#resoult').load('./sections.html #section2');
    // });

    // $('#button3').on('click', function (event) {
    // 	$('#resoult').load('./sections.html #section3');
    // 	setTimeout(alertEnd, 2000);
    // });

    // function alertEnd () {
    // 	alert('Ты выиграл и стал умнее!');
    // 	window.location.reload();
    // }

    // function btnNext() {
    // 	document.querySelector('#resoultNext').innerHTML = `<button type="button" class="btn btn - success">Следующий вопрос</button>`;
    // }


    // var saveLocalStorage = setInterval(function () {

    // 	if (countS === 0) {
    // 		clearInterval(saveLocalStorage);
    // 		return;
    // 	} else {
    // 		localStorage.setItem('countAll', countS);
    // 	}

    // }, 1000);

    // document.addEventListener('DOMContentLoaded', function() {

    // 	var countLoad = localStorage.getItem('countAll');

    // 	if (countLoad) {
    // 		document.querySelector("#count").textContent = countLoad;
    // 	} else {
    // 		var saveLocalStorage = setInterval(function () {

    // 			localStorage.setItem('countAll', countS);

    // 		}, 1000);
    // 	}

    // });

    // Загружаем данные из локального хранилища, если они есть
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

    var count = document.querySelector('#count');
    var countSum = document.querySelector('#countSum');
    var countS;

    var btnOne = document.querySelector('#btn1');
    var btnTen = document.querySelector('#btn2');
    var btnHun = document.querySelector('#btn3');
    var btnSu = document.querySelector('#btn4');

    var save = document.querySelector('#save').addEventListener('click', function () {

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

    var load = document.querySelector('#load').addEventListener('click', function (event) {

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

        // intervalCount();

    });


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

    // Функция для отображения суммы пассивного дохода
    function countSumFunction() {

        if (countS > 10 & countS < 100) {
            countSum.textContent = 1;
        } else if (countS > 100 & countS < 1000) {
            countSum.textContent = 11;
        } else if (countS > 1000 & countS < 10000) {
            countSum.textContent = 111;
        }
    }

    // function showNextBtn() {

    // 	if (countS > 10 & countS < 100) {

    // 		// document.querySelector('#btn2').style.display = 'inline-block';
    // 		// intervalCount();

    // 	} else if (countS > 100 & countS < 1000) {

    // 		// document.querySelector('#btn3').style.display = 'inline-block';
    // 		// intervalCount();

    // 	} else if (countS > 1000) {

    // 		// document.querySelector('#btn4').style.display = 'inline-block';
    // 		// intervalCount();

    // 	} 
    // }

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

