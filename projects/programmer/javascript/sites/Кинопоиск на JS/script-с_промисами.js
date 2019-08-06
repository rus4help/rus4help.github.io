const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies');

function apiSearch(event) {
    event.preventDefault();

    const searchText = document.querySelector('.form-control').value,
        server = 'https://api.themoviedb.org/3/search/multi?api_key=800089f89c087a27a2edaa6bc3cb7a2a&language=ru&query=' + searchText;
    movie.innerHTML = 'Загрузка';
    requestApi(server)
        .then(function (result) {
            const output = JSON.parse(result);
            let inner = '';

            output.results.forEach(function (item) {
                let nameItem = item.name || item.title;
                inner += `<div class="col-12">${nameItem}</div>`;
            });
            movie.innerHTML = inner;
        })
        .catch(function (reason) {
            movie.innerHTML = 'Упс, что-то пошло не так!';
            console.log('Error: ' + reason.status);
        })
    ;
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.open('GET', url);

        request.addEventListener('load', function () {
            if (request.status !== 200) {
                reject({status: request.status});
                return;
            }

            resolve(request.response);
        });
        request.addEventListener('error', function () {
            reject({status: request.status});
        });
        request.send();
    });
}

/*
request.addEventListener('readystatechange', function () {

    if (request.readyState !== 4) {
        movie.innerHTML = 'Загрузка';
        return;
    }

    if (request.status !== 200) {
        movie.innerHTML = 'Упс, что-то пошло не так!';
        console.log('Error: ' + request.status);
        return;
    }





});*/
