const stockList = ['AAPL', 'GOOG', 'FB', 'IBM', 'MCD'];

$(document).ready(function () {
    $.ajax({
        url: `https://api.iextrading.com/1.0/ref-data/symbols`,
        method: 'GET',
    }).then(function (response) {

        console.log(response);
        for (let i = 0; i < response.length; i++) {
            allStocks.push(response[i].symbol);
        }
        console.log(allStocks);
    })
    for (let i = 0; i < stockList.length; i++) {
        favsMenu.append(`<div class="row">
            <a class="favorite col-12 list-group-item" href="#" id="${stockList[i]}">${stockList[i]}</a>
        </div>`);
        favsDropdown.append(`<a class="favorite dropdown-item" href="#" id="${stockList[i]}">${stockList[i]}</a>`);
    }
})

