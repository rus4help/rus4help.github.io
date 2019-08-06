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