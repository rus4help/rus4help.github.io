var onePostImageAuthor = document.querySelector('.posts__element--big .posts__author');

onePostImageAuthor.style.display = 'none';

document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
        resize();
    };
});

function resize() {

    if (document.body.clientWidth <= 768) {
        onePostImageAuthor.style.display = 'block';
    } else if (document.body.clientWidth > 768) {
        onePostImageAuthor.style.display = 'none';
    }

}